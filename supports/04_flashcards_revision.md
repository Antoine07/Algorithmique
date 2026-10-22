# 10 flashcards — Voisins, motifs et fenêtres

Répondez de mémoire, révélez l'explication, puis choisissez **Je savais** ou **À revoir**. Ces cartes portent sur les notions nouvelles du chapitre 03.

## Carte 1 — Couples voisins

### Question

Pour comparer `values[i]` et `values[i + 1]`, pourquoi la boucle utilise-t-elle `range(len(values) - 1)` ?

### Réponse

Le dernier départ valide est `len(values) - 2`, dont le voisin est au dernier indice. La borne finale de `range` est exclue. Avec moins de deux éléments, aucun couple n'est comparé.

## Carte 2 — Indice de départ

### Question

Dans `values = [4, 8, 3]`, à quel indice commence le couple `[8, 3]` ?

### Réponse

À l'indice `1`. On mémorise l'indice de la première valeur du couple, pas sa valeur ni l'indice de la deuxième.

## Carte 3 — Compter les triples croissants

### Question

Quel parcours permet de lire trois voisins avec les indices `i`, `i + 1` et `i + 2` ?

### Réponse

`range(len(values) - 2)`. Pour un triple strictement croissant, vérifier `values[i] < values[i + 1] < values[i + 2]` ; une égalité ne convient pas.

## Carte 4 — Chevauchement de doublons

### Question

Combien de couples égaux y a-t-il dans `[5, 5, 5]` ?

### Réponse

Deux, aux indices de départ 0 et 1. La valeur du milieu appartient aux deux couples ; les motifs consécutifs peuvent donc se chevaucher.

## Carte 5 — Départs possibles d'un motif

### Question

Combien de positions de départ faut-il examiner pour un motif de 3 valeurs dans une liste de 6 valeurs ?

### Réponse

Quatre départs : 0, 1, 2 et 3. La boucle utilise `range(6 - 3 + 1)`. Si le motif est plus long que la liste, aucun départ n'est possible.

## Carte 6 — Rôle des deux indices

### Question

Dans une recherche de motif, que représentent les indices `i` et `j` dans `values[i + j] == pattern[j]` ?

### Réponse

`i` est le départ de la fenêtre dans la liste ; `j` est la position examinée à l'intérieur du motif. On utilise une boucle extérieure pour les départs et une boucle intérieure pour comparer les valeurs.

## Carte 7 — Garder le chevauchement

### Question

Où apparaît `[1, 1]` dans `[1, 1, 1]` ?

### Réponse

Aux départs 0 et 1. Après chaque essai, avancer le départ d'une seule position permet de ne pas manquer l'occurrence chevauchante.

## Carte 8 — Réinitialiser les différences

### Question

Quand remettre `differences` à zéro lorsqu'on compare plusieurs fenêtres à un motif ?

### Réponse

Au début de chaque nouvelle fenêtre, avant la boucle intérieure. Ainsi, chaque fenêtre a son propre compte ; retenir celles qui vérifient `differences <= 1` accepte zéro ou une différence.

## Carte 9 — Reconnaître un changement strict

### Question

Le couple `[0, -4]` constitue-t-il un changement de signe strict ? Pourquoi ?

### Réponse

Non. Zéro n'est ni positif ni négatif. Un changement strict exige un nombre négatif et un nombre positif, dans l'un ou l'autre ordre.

## Carte 10 — Classer des voisins

### Question

Comment distinguer une hausse, une baisse et une égalité pour deux valeurs voisines ?

### Réponse

Comparer dans cet ordre : `<` indique une hausse, `==` une égalité, et le dernier cas est une baisse. Avec `if` / `elif` / `else`, chaque couple est classé dans une seule catégorie.
