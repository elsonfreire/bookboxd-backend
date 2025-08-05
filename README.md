# bookboxd-backend

## 📦 Requirements

* Node.js v18+ (for local development)
* Docker (to run in a container)

---

## 🐳 Running with Docker

1. **(Optional)** Install Node type definitions locally for your editor:

   ```bash
   npm install --save-dev @types/node
   ```

2. **Build** the Docker image:

   ```bash
   docker build -t bookboxd-backend .
   ```

3. **Run** the container:

   ```bash
   docker run -p 3000:3000 --name bookboxd-api bookboxd-backend
   ```

> The API will be available at `http://localhost:3000`.

### 🚀 Stopping and Removing the Container

To stop:

```bash
docker stop bookboxd-api
```

To remove:

```bash
docker rm bookboxd-api
```

---

## 🔧 Environment Variables

- `PORT` (default: `3000`) — Port the application will listen on.

---

## 📝 Useful Scripts (in `package.json`)

- `npm run build`: compiles TypeScript to JavaScript in `dist/`
- `npm start`: runs `node dist/server.js`

---
