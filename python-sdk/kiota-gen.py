import requests
import zipfile
import io
import os
import stat
import sys
import shutil
import platform
from pathlib import Path
import xml.etree.ElementTree as ET

KIOTA_OS_NAMES = {"Windows": "win", "Darwin": "osx", "Linux": "linux"}
KIOTA_ARCH_NAMES = {32: "x86", 64: "x64"}


# https://stackoverflow.com/a/7171315/7898052
def os_bits(machine=platform.machine()):
    machine2bits = {"AMD64": 64, "x86_64": 64, "i386": 32, "x86": 32}
    return machine2bits.get(machine, None)


def generate_kiota_client_files(setup_kwargs):
    kiota_os_name = KIOTA_OS_NAMES.get(platform.system(), None)
    if kiota_os_name is None:
        print("Unsupported operating system.")
        exit(1)

    kiota_arch_name = KIOTA_ARCH_NAMES.get(os_bits(), None)
    if kiota_arch_name is None:
        print("Unsupported architecture.")
        exit(1)

    if platform.processor()[0] == "arm" and kiota_arch_name == "x64":
        kiota_arch_name = "arm64"

    kiota_release_name = f"{kiota_os_name}-{kiota_arch_name}.zip"
    # Detecting the Kiota version from a .csproj file so that it can be updated by automatic tool (e.g. Dependabot)
    kiota_version = (
        ET.parse(os.path.join(sys.path[0], "kiota-version.csproj"))
        .getroot()
        .find(".//*[@Include='Microsoft.OpenApi.Kiota.Builder']")
        .get("Version")
    )
    print(f"Using Kiota version: {kiota_version}")
    # Download the Kiota release archive
    url = f"https://github.com/microsoft/kiota/releases/download/v{kiota_version}/{kiota_release_name}"

    tmpdir = os.path.join(sys.path[0], "kiota_tmp", kiota_version)
    if not os.path.exists(tmpdir):
        print(f"Downloading Kiota from URL: {url}")
        response = requests.get(url)
        zip_archive = zipfile.ZipFile(io.BytesIO(response.content))
        os.makedirs(tmpdir)
        zip_archive.extractall(tmpdir)
    else:
        print(
            f"Using kiota already available on path if something goes wrong, please clean the local 'kiota_tmp' folder."
        )

    kiota_bin = os.path.join(tmpdir, "kiota")
    st = os.stat(kiota_bin)
    os.chmod(kiota_bin, st.st_mode | stat.S_IEXEC)

    openapi_doc = Path(__file__).parent.joinpath("openapi.json")
    if not os.path.exists(openapi_doc):
        shutil.copyfile(
            os.path.join(
                sys.path[0],
                "..",
                "common",
                "src",
                "main",
                "resources",
                "META-INF",
                "openapi.json",
            ),
            openapi_doc,
        )

    output = Path(__file__).parent.joinpath("apicurioregistrysdk", "client")

    command = f'{kiota_bin} generate --language=python --openapi="{openapi_doc}" --output="{output}" --class-name=RegistryClient --namespace-name=client --clean-output --clear-cache'
    print(f"Executing kiota command: {command}")

    os.system(command)
    print("Kiota client generation has been successful")
    return setup_kwargs


if __name__ == "__main__":
    if not os.path.exists(
        os.path.join(sys.path[0], "apicurioregistrysdk", "client", "kiota-lock.json")
    ):
        generate_kiota_client_files({})
