# express-starter

API Express minimale, dockerisée, avec tests — support du test « GPT-6 Astra vs pipeline CI/CD ».

- `GET /health` — état de l'API
- `GET /api/hello?name=X` — message de bienvenue
- `POST /api/echo` — renvoie le JSON reçu

```bash
npm ci
npm test          # 3 tests via node --test
npm start         # http://localhost:3000
docker build -t express-starter . && docker run -p 3000:3000 express-starter
```

Aucun workflow dans `.github/workflows/` : c'est volontaire, la tâche 1 du test part de zéro.
