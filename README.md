# Mon Vieux Grimoire

Site de référencement et de notation de livres.

L'API backend de **Mon Vieux Grimoire** permet de gérer une collection de livres avec MongoDB. Les utilisateurs peuvent créer un compte, se connecter et effectuer des opérations CRUD sur les livres telles que l'ajout, la suppression et la modification des livres.

# Installation
## Cloner le projet 
```
git clone https://github.com/HFDC-Dev/P6-Grimoire.git
cd P6-Grimoire/backend
```

## Installer les dépendances
```
npm install
```
## Créer le fichier .env
Créez un fichier .env à la racine du dossier backend avec :
```
USER_DB=monUtilisateur
PASSWORD_DB=monMotDePasse
CLUSTER_DB=nomDuCluster.mongodb.net
```

## Démarrage frontend :
```
cd frontend
npm start
```

## Démarrage backend :
```
cd backend
node server
```

## Endpoint de l'API :

### Authentification :

 - Crée un nouvel utilisateur : POST /api/auth/signup
 - Connexion : POST /api/auth/login
 
### Livres :

- Récupère tous les livres : GET /api/books
- Récupère un livre spécifique (par ID) : GET /api/books/:id
- Récupère les livres les mieux notés : GET /api/books/bestrating
- Créer un nouveau livre : POST /api/books
- Mettre à jour un livre : PUT /api/books/:id
- Supprimer un livre : DELETE /api/books/:id
- Noter un livre : POST /api/books/:id/rating


