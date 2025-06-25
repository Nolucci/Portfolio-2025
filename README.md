# Portfolio Nathan FRANCESKIN

Portfolio personnel développé avec React.js et déployé avec Docker.

## Déploiement rapide

### Prérequis
- Docker
- Docker Compose

### Déploiement
```bash
docker-compose up --build -d
```

L'application sera accessible sur [http://localhost](http://localhost)

### Arrêt
```bash
docker-compose down
```

## Développement

### Installation des dépendances
```bash
npm install
```

### Lancement en mode développement
```bash
npm start
```

### Build de production
```bash
npm run build
```

## Structure du projet

```
├── docker/                 # Configuration Docker
│   └── Dockerfile          # Image de production
├── public/                 # Fichiers statiques
├── src/                    # Code source React
│   ├── components/         # Composants React
│   ├── Assets/            # Images et ressources
│   └── index.clean.js     # Version nettoyée d'index.js
├── docker-compose.yml      # Configuration Docker Compose
├── nginx.conf             # Configuration Nginx
└── .env.example           # Variables d'environnement
```

## Technologies utilisées

- React.js
- React Router
- React Bootstrap
- TypeScript Particles
- Docker & Nginx