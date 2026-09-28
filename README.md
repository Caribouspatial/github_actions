# Panier, la boutique en ligne

Vous rejoignez une équipe qui développe cette application.
Plusieurs personnes y contribuent en même temps.

**Votre objectif : empêcher qu'une modification qui casse l'application passe
inaperçue.**

Trois contraintes :

- la vérification doit être **automatique** ;
- elle doit être **reproductible** ;
- elle ne doit **pas dépendre de la machine** de celui qui écrit le code.

---

## Mission 1

> Faites en sorte que les tests de ce projet s'exécutent automatiquement
> **à chaque pull request**.

Je ne vous donne pas le fichier. La documentation de GitHub est autorisée.

---

## Ce que contient le projet

```
src/panier.js          le code, une quarantaine de lignes
test/panier.test.js    huit tests
package.json           la commande de test
```

## Les commandes du projet

| | |
|---|---|
| Installer les dépendances | il n'y en a aucune, c'est fait exprès |
| Lancer les tests | `npm test` |

Le projet n'utilise que le lanceur de tests intégré à Node. Rien à installer,
ni chez vous, ni sur la machine qui exécutera vos tests.

## Règles du jeu

- Vous travaillez **à deux**, à trois si votre groupe est au complet.
- **Un seul écran par équipe.** Vous changez de pilote à la moitié.
- Tout se fait **dans le navigateur**, depuis GitHub. Rien à installer.
  Si vous préférez cloner et travailler en local, faites-le, mais ne passez pas
  dix minutes sur une authentification : ce n'est pas l'objet du TP.
- Documentation, moteur de recherche et forums : autorisés tout de suite.
- **Intelligence artificielle : pas pendant les sept premières minutes.**
  Ensuite, autorisée.
  En contrepartie, je peux demander à n'importe lequel d'entre vous
  d'expliquer n'importe quelle ligne de votre fichier.

## Deux choses à savoir avant de commencer

**1.** Travaillez sur **votre fork**, pas sur le dépôt d'origine. Vos pull
requests vont de votre branche vers le `main` de **votre propre fork**.

**2.** GitHub **désactive les workflows sur les dépôts forkés**. Après avoir
forké, allez dans l'onglet **Actions** et cliquez sur le bouton vert
*« I understand my workflows, go ahead and enable them »*.
Sans ça, rien ne se déclenchera jamais et vous chercherez une erreur qui
n'existe pas.
