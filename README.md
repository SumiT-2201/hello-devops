# hello-devops

A minimal, beginner-friendly **React + Vite** static web application designed strictly for learning hands-on DevOps, CI/CD, Containerization, Orchestration, and Cloud Deployment.

---

## 1. Project Overview & DevOps Architecture

This project serves as a practical, lightweight template to understand the entire modern software delivery lifecycle:

### Architecture Flow:

```text
Developer
   │
   ▼
Git (Version Control)
   │
   ▼
GitHub (Remote Repository)
   │
   ▼
GitHub Actions (CI Pipeline)
   │
   ├──▶ npm ci (Install clean dependencies)
   └──▶ npm run build (Compile to dist/ artifact)
   │
   ├──▶ Docker Container (Bundles dist/ with Nginx web server)
   │       └──▶ Local / Kubernetes (NodePort / Service mapping)
   │
   └──▶ AWS Amplify (Deploys static dist/ directly to Global CDN)
```

### Component Breakdown:

- **React + Vite**: Fast, modern frontend framework producing a pure static single-page application (SPA) output in `dist/`.
- **Git / GitHub**: Code versioning and central collaborative repository.
- **GitHub Actions (CI)**: Automated continuous integration runner that tests and builds code on every push/PR to `main`.
- **Nginx**: Lightweight, high-performance web server that serves static files and handles SPA client-side routing.
- **Docker**: Containers that bundle the built application (`dist/`) and Nginx server into an isolated runtime package.
- **Docker Compose**: Multi-container orchestrator utility for running services with standard configuration (`docker-compose.yml`).
- **Kubernetes**: Production orchestrator that manages pod replicas, self-healing, and network routing for containerized apps.
- **AWS Amplify**: Fully managed serverless hosting platform for automatic static site deployment directly from GitHub.

---

## 2. Local Development

Install dependencies and start the local Vite development server:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Open your browser at `http://localhost:3000` (or the URL shown in terminal).

---

## 3. Production Build & Preview

Verify that the static build compiles cleanly:

```bash
# 1. Compile production bundle to dist/
npm run build

# 2. Preview production build locally
npm run preview
```

> **Note**: `npm run build` generates the production static bundle in the `dist/` folder.

---

## 4. Docker (Nginx Web Server)

Build the multi-stage Docker image and run it locally:

```bash
# 1. Build Docker image
docker build -t hello-devops .

# 2. Run container mapped to host port 8080
docker run -p 8080:80 hello-devops
```

Access the containerized app in your browser at `http://localhost:8080`.

---

## 5. Docker Compose

Run and stop containerized services using Docker Compose:

```bash
# Build and start container in foreground
docker compose up --build

# Stop and remove containers
docker compose down
```

Access at `http://localhost:8080`.

---

## 6. Kubernetes Deployment

Deploy the application to a local cluster (e.g., Minikube or Docker Desktop Kubernetes).

> ⚠️ **Important**: Ensure your local Kubernetes cluster has access to the local Docker image (`hello-devops:latest`). If using Minikube, run `eval $(minikube docker-env)` before building the image, or load it with `minikube image load hello-devops:latest`.

```bash
# 1. Apply Deployment & Service manifests
kubectl apply -f k8s/

# 2. Check pod and service status
kubectl get pods
kubectl get deployments
kubectl get services

# 3. Clean up Kubernetes resources
kubectl delete -f k8s/
```

---

## 7. GitHub Actions (Continuous Integration)

The workflow file `.github/workflows/ci.yml` triggers automatically on:
- Pushes to the `main` branch
- Pull requests targeting `main`

### Pipeline Steps:
1. Checks out repository code.
2. Sets up Node.js 20 LTS.
3. Executes `npm ci` for clean dependency installation.
4. Runs `npm run build` to ensure the project compiles without errors.

---

## 8. AWS Amplify Hosting

AWS Amplify automatically builds and deploys your application using `amplify.yml`:

- **Build Output Directory**: `dist`
- **Build Command**: `npm run build`
- **Pre-build Command**: `npm ci`

No backend or server.js configuration is required.

---

## 9. Troubleshooting

- **Port 8080 or 3000 already in use**:
  Check running processes: `netstat -ano | findstr :8080` and stop conflicting services.
- **Docker image not found in Kubernetes**:
  Ensure image `hello-devops:latest` is built locally or pushed to a container registry.
- **Vite Build Failures**:
  Run `npm run build` locally to inspect syntax or module import issues.
