
Start minikube with those parameters:
```
minikube start --driver=docker --memory 8192 --cpus 3
```

<!-- From: -->
<!-- https://redhat-developer-demos.github.io/kafka-tutorial/kafka-tutorial/1.0.x/07-kubernetes.html -->

Install Strimzi:
```
kubectl apply -f 'https://strimzi.io/install/latest?namespace=default' -n default
```

Create an ephemeral cluster:
```
kubectl apply -f load-tests/kafka-ephemeral.yaml
```

Wait to have everything ready:
```
kubectl wait kafka/my-kafka --for=condition=Ready --timeout=300s -n default
```

Create a registry instance that uses Kafka:
```
kubectl apply -f load-tests/registry.yaml
```

Forward the Apicurio Registry Port:
```
kubectl port-forward service/registry-service 8080
```

and finally run the `load.sh` from this folder
