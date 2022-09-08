

Performing load tests on Kafka SQL

Start Kafka

bin/zookeeper-server-start.sh config/zookeeper.properties
bin/kafka-server-start.sh config/server.properties

Monitoring:
docker run -p 8090:8080 -e KAFKA_BROKERS=host.docker.internal:9092 docker.redpanda.com/vectorized/console:latest

Start Apicurio-registry on Kafka
java -jar storage/kafkasql/target/apicurio-registry-storage-kafkasql-2.2.6-SNAPSHOT-runner.jar


run load:

./load.sh
after you have uploaded an artifact with artifactId testArtifact


To run from a container:
host.docker.internal:9092

docker run -p 8080:8080 -e JAVA_OPTIONS="-Dregistry.kafka.common.bootstrap.servers=host.docker.internal:9092 -Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager" --memory="200m" --memory-swap="300m" --rm docker.io/apicurio/apicurio-registry-kafkasql:latest



test:
-XX:MaxRAMPercentage=50

docker run -p 8080:8080 -e JAVA_OPTIONS="-XX:MaxRAMPercentage=80 -Dregistry.kafka.common.bootstrap.servers=host.docker.internal:9092 -Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager" --memory="300m" --memory-swap="200m" --rm docker.io/apicurio/apicurio-registry-kafkasql:latest

