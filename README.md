# bookboxd-backend

## 📦 Requisitos

- Node.js v18+ (para desenvolvimento local)
- Docker (para rodar em container)

---

## 🐳 Execução com Docker

1. **(Opcional)** Instale localmente as definições de tipos do Node para o seu editor:

   ```bash
   npm install --save-dev @types/node
   ```

2. **Build** da imagem Docker:

   ```bash
   docker build -t bookboxd-backend .
   ```

3. **Run** do container:

   ```bash
   docker run -p 3000:3000 --name bookbox-api bookboxd-backend
   ```

> A API estará disponível em `http://localhost:3000`.

### 🚀 Parando e Removendo o Container

Para parar:

```bash
docker stop bookbox-api
```

Para remover:

```bash
docker rm bookbox-api
```

---

## 🔧 Variáveis de Ambiente

- `PORT` (padrão: `3000`) — Porta em que a aplicação irá escutar.

---

## 📝 Scripts Úteis (no `package.json`)

- `npm run build`: compila o TypeScript para JavaScript em `dist/`
- `npm start`: executa `node dist/server.js`

---
