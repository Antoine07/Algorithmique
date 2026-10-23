# 8 flashcards — Réviser avant la recherche

Répondez de mémoire, révélez la réponse, puis choisissez **Je savais** ou **À revoir**. Ces cartes réactivent les bases utiles avant le chapitre 03.

## Carte 1 — Les bornes de range

### Question

Quelles valeurs prend `i` dans `range(1, 4)` ?

### Réponse

`1`, `2` et `3`. La borne de fin `4` est exclue.

## Carte 2 — Parcourir les indices

### Question

Quelle boucle parcourt tous les indices valides d'une liste `values` ?

### Réponse

`for i in range(len(values)):`. Les indices vont de `0` à `len(values) - 1`. Une liste vide ne donne aucun indice.

## Carte 3 — Comparer des voisins

### Question

Pourquoi une boucle qui compare `values[i]` et `values[i + 1]` s'arrête-t-elle avant le dernier indice ?

### Réponse

Pour que `i + 1` reste un indice valide. La boucle utilise `range(len(values) - 1)` ; une liste de moins de deux éléments n'a aucun couple à comparer.

## Carte 4 — Lire le reste

### Question

Que vaut `17 % 5` ?

### Réponse

`2`, car `17 = 5 × 3 + 2`. L'opérateur `%` donne le reste de la division.

## Carte 5 — Lire le quotient entier

### Question

Que vaut `17 // 5` ?

### Réponse

`3`. L'opérateur `//` donne le quotient entier. Combiné à `%`, il sert notamment à retirer les chiffres d'un nombre.

## Carte 6 — Comprendre break

### Question

Que fait `break` dans une boucle ?

### Réponse

Il termine immédiatement la boucle en cours. Dans une recherche de première occurrence, il évite de continuer après avoir trouvé la valeur.

## Carte 7 — Utiliser deux indices

### Question

Dans `values[i + j]`, que représentent `i` et `j` lorsqu'on cherche un motif ?

### Réponse

`i` désigne le début d'une fenêtre dans la liste ; `j` désigne une position à l'intérieur du motif. La boucle extérieure choisit `i`, la boucle intérieure fait varier `j`.

## Carte 8 — Réinitialiser un compteur

### Question

Où initialiser `matches = 0` si l'on compte les positions correspondantes pour plusieurs fenêtres ?

### Réponse

Au début de chaque fenêtre, dans la boucle extérieure et avant la boucle intérieure. Ainsi, les correspondances d'une fenêtre ne sont pas ajoutées au compte de la suivante.

Après cette série, cinq flashcards animées permettent de s'entraîner sur les fenêtres, les indices `i + j` et les boucles imbriquées.
