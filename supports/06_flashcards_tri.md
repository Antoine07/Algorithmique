# Flashcards — Le tri à bulles

Répondre de mémoire, révéler la réponse, puis choisir **Je savais** ou **À revoir**.

## Carte 1 — Garder une valeur pendant l'échange

### Question

Avec `a = 9` et `b = 2`, pourquoi ne suffit-il pas d'écrire `a = b` puis `b = a` ?

### Réponse

Après `a = b`, les deux variables valent 2 et la valeur 9 est perdue. Il faut d'abord la conserver : `temp = a`, puis `a = b`, puis `b = temp`. On obtient `a = 2` et `b = 9`.

## Carte 2 — Rester dans la liste

### Question

Pourquoi un passage utilise-t-il `range(len(nombres) - 1)` lorsque l'on compare `nombres[i]` et `nombres[i + 1]` ?

### Réponse

Le dernier couple commence à l'indice `len(nombres) - 2`. Comme `range` exclut sa borne finale, `i + 1` ne dépasse jamais le dernier indice. Pour une liste de 4 éléments, les départs sont 0, 1 et 2.

## Carte 3 — Comprendre un passage

### Question

Après un passage croissant sur `[4, 1, 3, 2]`, quelle liste obtient-on ? Est-elle entièrement triée ?

### Réponse

On obtient **`[1, 3, 2, 4]`**. Le maximum 4 a atteint sa position définitive, mais 3 et 2 sont encore dans le mauvais ordre. Un passage ne suffit pas toujours.

## Carte 4 — Deux boucles, deux rôles

### Question

À quoi servent les deux boucles du tri à bulles et pourquoi réduire la borne avec `len(nombres) - 1 - passage` ?

### Réponse

La boucle extérieure répète les passages. La boucle intérieure compare les voisins. Après chaque passage, une valeur supplémentaire est définitivement placée à droite : la borne réduite évite de la comparer à nouveau.

## Carte 5 — Savoir quand arrêter

### Question

Un passage complet ne réalise aucun échange. Que peut-on en déduire et où faut-il placer `break` ?

### Réponse

La liste est déjà triée : aucun couple voisin n'est dans le mauvais ordre. Le `break` se place dans la boucle extérieure, **après** la boucle intérieure, sous le test `if not echange`. Le booléen `echange` doit être remis à `False` au début de chaque passage. Pour `[1, 2, 3]`, un passage suffit à le constater.
