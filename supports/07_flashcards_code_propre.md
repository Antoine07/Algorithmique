# 10 flashcards — Écrire un algorithme propre

Répondez avant de révéler la carte. Ces repères aident à écrire un code lisible, prévisible et facile à corriger.

## Carte 1 — Choisir un nom utile

### Question

Quel nom explique le mieux le contenu d'une variable qui conserve des notes suffisantes ?

### Réponse

`valid_grades` est plus parlant que `x` ou `list2`. Un nom précis aide à comprendre l'intention sans relire tout l'algorithme.

## Carte 2 — Suivre la convention des noms

### Question

Comment nommer une variable contenant le nombre d'éléments trouvés en Python ?

### Réponse

Utiliser `match_count` : minuscules et mots séparés par des traits de soulignement (`snake_case`). Garder la même convention dans tout le programme.

## Carte 3 — Indenter les blocs

### Question

Quelles lignes doivent être indentées après `if` ou `for` ?

### Réponse

Les instructions qui appartiennent au bloc sont indentées de quatre espaces. Une indentation régulière rend les conditions et les boucles faciles à repérer.

## Carte 4 — Initialiser avant de parcourir

### Question

Où placer `total = 0` si l'on veut accumuler les valeurs d'une liste ?

### Réponse

Avant la boucle. Placé dedans, le total est remis à zéro à chaque tour et le cumul est perdu.

## Carte 5 — Séparer les étapes

### Question

Quelles étapes identifier avant d'écrire le code ?

### Réponse

Les entrées, le traitement, puis la sortie attendue. Les distinguer évite de mélanger les données de départ, les calculs et l'affichage.

## Carte 6 — Choisir une borne sûre

### Question

Pour parcourir les indices d'une liste, comment éviter de lire après sa fin ?

### Réponse

Pour les valeurs seules : `range(len(items))`. Pour comparer chaque élément avec son voisin suivant : `range(len(items) - 1)`. Le dernier indice est `len(items) - 1`.

## Carte 7 — Faire avancer un while

### Question

Que faut-il vérifier dans une boucle `while` ?

### Réponse

Une valeur utilisée dans la condition doit progresser vers la fin de la boucle. Sinon, la condition peut rester vraie indéfiniment.

## Carte 8 — Garder la liste d'origine

### Question

Comment filtrer sans perdre la liste initiale ?

### Réponse

Créer une nouvelle liste vide, par exemple `valid_items = []`, puis y ajouter les éléments retenus avec `append`. La liste d'origine reste disponible.

## Carte 9 — Tester un cas limite

### Question

En plus du cas habituel, quels petits cas tester pour une boucle ou une recherche ?

### Réponse

Tester une liste vide, une liste à un élément, une cible absente et, si pertinent, des nombres négatifs ou des doublons. Ces cas révèlent souvent des erreurs de borne ou d'initialisation.

## Carte 10 — Commenter avec intention

### Question

Que doit expliquer un commentaire utile ?

### Réponse

Une décision ou une intention qui n'est pas évidente à la seule lecture du code. Les noms et les instructions simples n'ont généralement pas besoin d'être paraphrasés.
