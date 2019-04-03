FROM openjdk:12-oracle

LABEL maintainer="finalyetifive@gmail.com"

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "demo-0.0.1-SNAPSHOT.jar"]

COPY target/demo-0.0.1-SNAPSHOT.jar .