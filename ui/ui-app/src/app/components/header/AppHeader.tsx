import { FunctionComponent } from "react";
import { Brand, Masthead, MastheadBrand, MastheadContent, MastheadMain } from "@patternfly/react-core";
import { AppNavigation, useAppNavigation } from "@hooks/useAppNavigation.ts";
import { Link } from "react-router-dom";
import { AppHeaderToolbar } from "@app/components";
import { Services } from "@services/services.ts";


export type AppHeaderProps = {
    // No properties.
};


export const AppHeader: FunctionComponent<AppHeaderProps> = () => {
    const appNavigation: AppNavigation = useAppNavigation();

    if (Services.getConfigService().features().showMasthead !== undefined && !Services.getConfigService().features().showMasthead) {
        return <></>;
    }

    return (
        <Masthead id="icon-router-link">
            <MastheadMain>
                <MastheadBrand component={props => <Link {...props} to={ appNavigation.createLink("/artifacts") } />}>
                    <Brand src="/apicurio_registry_logo_reverse.svg" alt="Apicurio Registry" heights={{ default: "36px" }} />
                </MastheadBrand>
            </MastheadMain>
            <MastheadContent>
                <AppHeaderToolbar />
            </MastheadContent>
        </Masthead>
    );
};
