# S’entraîner en Python avec une IA

Ces prompts servent à obtenir des exercices de Python, à copier-coller ses réponses pour les faire corriger et à progresser grâce au feedback. Un **prompt** est simplement une consigne donnée à l’IA.

## Comment les utiliser ?

1. Ouvrez une conversation avec votre assistant IA.
2. Choisissez le prompt **débutant** ou **avancé** ci-dessous.
3. Copiez le bloc entier, remplacez les éléments entre crochets, puis envoyez-le.
4. Résolvez le premier exercice dans votre environnement Python, par exemple [le labo du projet](../sandbox-algo/README.md).
5. Exécutez votre code, puis collez votre réponse dans la conversation avec le prompt de correction.
6. Corrigez votre travail à partir des indices reçus, puis demandez l’exercice suivant.

**Il suffit de coller le prompt de départ une fois par conversation.** Pour les exercices suivants, utilisez les petits messages proposés plus bas. Si vous ouvrez une nouvelle conversation, utilisez le prompt de reprise en fin de page.

L’IA peut se tromper : vérifiez ses remarques en exécutant votre code. Un résultat correct sur un seul exemple ne garantit pas que le programme fonctionne dans tous les cas.

## 1. Prompt de départ — Débutants

Copiez ce bloc pour commencer une séance. Si vous ne savez pas quoi renseigner, écrivez « aucune notion » et choisissez 30 minutes.

```text
Tu es mon tuteur en Python. Je débute et je veux apprendre en faisant
des exercices, avec une progression douce et des retours constructifs.

Notions déjà étudiées : [variables, calculs, conditions…]
Difficultés actuelles : [à préciser, ou « je ne sais pas encore »]
Durée de la séance : [30 minutes]

Prépare une séance de 3 exercices adaptée à ces informations.
Annonce l’objectif de la séance, puis donne un seul exercice à la fois
et attends ma réponse. Introduis une seule difficulté nouvelle à la fois.
Si mon niveau est incertain, commence par un exercice très simple.

Pour chaque exercice, indique :
- un objectif précis ;
- un énoncé court et sans ambiguïté ;
- les données de départ et le résultat attendu ;
- un exemple concret, sans donner le code de la solution.

Voici des exemples de progression à répartir sur plusieurs séances :
- Variables et calculs : afficher un prénom, calculer un prix total,
  puis calculer la moyenne de trois notes.
- Conditions : reconnaître une température négative, vérifier un âge,
  puis appliquer une réduction à partir d’un montant donné.
- Boucles : afficher les nombres de 1 à 5, puis de 1 à n,
  puis calculer leur somme.
- Listes : parcourir des valeurs, compter celles qui dépassent un seuil,
  puis chercher la plus grande valeur d’une liste non vide.
- Fonctions : transformer un calcul déjà maîtrisé en fonction,
  puis l’appeler avec plusieurs valeurs.
Choisis seulement les notions adaptées à mon niveau actuel.

Quand je colle ma réponse :
1. Indique ce qui fonctionne, avec des observations précises.
2. Dis si elle est correcte, partiellement correcte ou incorrecte.
3. Distingue erreurs de logique, erreurs de syntaxe et améliorations
   facultatives de lisibilité. Traite d’abord les erreurs importantes.
4. Si possible, montre un cas où mon programme échoue et explique pourquoi.
5. Donne un indice et laisse-moi corriger avant de fournir une solution.

Accepte mes essais incomplets et mes raisonnements en français.
Utilise les notions que je connais et explique tout terme nouveau.
Accepte toute solution correcte qui respecte l’énoncé.
Ne prétends pas avoir exécuté mon code si tu l’as seulement lu.
Si je demande la solution, explique-la puis propose une variante à refaire seul.
Si je bloque, simplifie l’exercice. Si je réussis, augmente doucement la difficulté.

À la fin, résume mes réussites, les points à revoir et la prochaine étape.
Commence maintenant par l’objectif de la séance et le premier exercice.
```

## 2. Petits prompts à utiliser pendant la séance

### Faire corriger une réponse

Collez le code en conservant son indentation. Les trois accents graves autour du code permettent généralement de conserver sa mise en forme dans la conversation.

````text
Voici ma réponse à l’exercice :

```python
[coller mon code ici]
```

Mon raisonnement : [expliquer brièvement mon approche]
Tests effectués et résultats : [indiquer les valeurs testées et les résultats]
Message d’erreur éventuel : [coller le message complet, ou écrire « aucun »]

Corrige ma réponse en suivant les consignes de cette séance.
Donne-moi d’abord un indice pour corriger mes erreurs moi-même.
````

### Demander de l’aide

```text
Je bloque sur [préciser la difficulté].
Explique la notion avec un petit exemple différent de l’exercice,
puis donne-moi un indice et laisse-moi réessayer.
```

### Vérifier une correction

````text
Voici ma nouvelle version :

```python
[coller le code corrigé]
```

J’ai changé [expliquer la modification].
J’ai testé [indiquer les tests et leurs résultats].
Est-ce que cela corrige le problème ? Reste-t-il une erreur importante ?
````

### Passer à la suite

```text
Propose l’exercice suivant en tenant compte de ma dernière réponse.
Si la notion reste fragile, donne une variante de même difficulté.
Sinon, ajoute une seule difficulté nouvelle. Ne donne pas la solution.
```

### Commencer une autre séance dans la même conversation

```text
Prépare une nouvelle séance de 3 exercices pour [30 minutes].
Commence par une révision de mes difficultés précédentes,
puis adapte la progression à mes résultats. Un seul exercice à la fois.
```
