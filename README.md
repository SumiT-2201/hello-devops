# hello-devops

A minimal Node.js Express application designed strictly for learning DevOps, containerization, and deployment.

---

## Commands for Deployment Practice

### LOCAL

Install dependencies and start the local Node.js server:

```bash
npm install
npm start
```

---

### DOCKER

Build the Docker image and run it as a standalone container:

```bash
docker build -t hello-devops .
docker run -p 3000:3000 hello-devops
```

---

### DOCKER COMPOSE

Build and run containers defined in `docker-compose.yml`, or stop and remove them:

```bash
docker compose up --build
docker compose down
```

---

### KUBERNETES

Apply Kubernetes configurations, inspect resource status, view logs, and clean up resources:

```bash
kubectl apply -f k8s/
kubectl get pods
kubectl get deployments
kubectl get services
kubectl logs
kubectl delete -f k8s/
```

---

## Key DevOps Concepts Explained

- **Dockerfile**: A blueprint text file containing step-by-step instructions for building a Docker image.
- **Docker image**: A lightweight, standalone, executable package that includes everything needed to run an application (code, runtime, libraries, environment variables).
- **Docker container**: A running, isolated instance of a Docker image.
- **Docker Compose**: A tool for defining and running multi-container Docker applications using a single configuration file (`docker-compose.yml`).
- **Kubernetes Pod**: The smallest deployable unit in Kubernetes, wrapping one or more containers (usually one container per pod) with shared network and storage resources.
- **Kubernetes Deployment**: A Kubernetes resource manager that defines the desired state for pods (e.g., number of replicas, image version) and handles rolling updates and scaling automatically.
- **Kubernetes Service**: An abstraction layer that exposes a group of running pods over a network endpoint, providing load balancing and stable IP routing.
- **Replica**: A duplicate copy of a running pod instance in a cluster to ensure high availability and load distribution.
- **Health check**: Periodic probes (such as readiness and liveness checks) sent by the container orchestrator to an application endpoint (e.g., `/health`) to verify if the container is healthy and ready to serve traffic.
