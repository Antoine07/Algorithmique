# Flashcards — Recherche et logique dans les listes

Répondre de mémoire, révéler l'explication, puis choisir **Je savais** ou **À revoir**. Il s'agit d'une autoévaluation, sans note. Les motifs utilisés sont non vides.

## Carte 1 — Compter les chiffres

### Question

Que vaut `len(str(1002))` ? Et `len(str(0))` ?

### Réponse

**4 et 1.** `str()` transforme le nombre en texte ; `len()` compte ses caractères. Zéro s'écrit avec un chiffre. Cette méthode suppose ici des entiers positifs ou nuls : pour un négatif, le signe `-` serait aussi compté.

## Carte 2 — Comparer des voisins

### Question

Pourquoi utilise-t-on `range(len(valeurs) - 1)` pour comparer `valeurs[i]` et `valeurs[i + 1]` ?

### Réponse

Le dernier indice testé pour `i` doit être **`len(valeurs) - 2`** : son voisin est alors le dernier élément. `range` exclut sa borne finale. On évite ainsi un accès après la fin de la liste. Avec moins de deux éléments, la boucle ne fait aucun tour.

## Carte 3 — Chercher un motif complet

### Question

Dans une liste de 6 éléments, combien de positions de départ faut-il tester pour chercher un motif de 3 éléments ?

### Réponse

**4 positions : 0, 1, 2 et 3.** La boucle est `range(6 - 3 + 1)`. Pour des longueurs `n` et `m`, on utilise `range(n - m + 1)`. Le `+ 1` permet de tester le dernier départ valide. Si le motif est plus long que la liste, aucun départ n'est testé.

## Carte 4 — Reconnaître un triple croissant

### Question

Les triples `[2, 4, 4]` et `[2, 4, 6]` sont-ils strictement croissants ? Quel test utiliser ?

### Réponse

**Seul `[2, 4, 6]` l'est.** Le test `x < y < z` exige deux augmentations strictes ; une égalité ne convient pas. Pour comparer trois voisins sans sortir de la liste, parcourir `range(len(valeurs) - 2)`.

## Carte 5 — Détecter un changement de signe

### Question

Quels couples ont des signes opposés stricts : `[-2, 3]`, `[0, -4]`, `[5, -1]` ?

### Réponse

**`[-2, 3]` et `[5, -1]`.** Le test est `(a < 0 and b > 0) or (a > 0 and b < 0)`. Il couvre les deux sens du changement. Zéro n'est ni strictement positif ni strictement négatif : `[0, -4]` est exclu.

## Carte 6 — Compter les doublons voisins

### Question

Combien de couples voisins égaux trouve-t-on dans `[4, 4, 4, 2]` ? À quels indices de départ ?

### Réponse

**2 couples, aux indices 0 et 1.** On compare chaque élément à son voisin avec `valeurs[i] == valeurs[i + 1]`. Trois valeurs identiques consécutives forment deux couples : l'élément central participe aux deux.

## Carte 7 — Accepter les chevauchements

### Question

Où apparaît le motif `[1, 1]` dans `[1, 1, 1]` ? Pourquoi ne pas avancer de la longueur du motif après une correspondance ?

### Réponse

**Aux indices 0 et 1.** Les deux occurrences partagent un élément. Avancer de deux positions ferait manquer celle d'indice 1. Il faut tester chaque départ, puis comparer `donnees[i + j]` à `motif[j]` dans une boucle intérieure.

## Carte 8 — Autoriser une différence

### Question

Pour comparer chaque fenêtre à un motif, où initialiser `differences = 0` et quel test accepte au plus une différence ?

### Réponse

**Au début de chaque fenêtre**, avant la boucle qui compare ses éléments. Incrémenter le compteur à chaque inégalité, puis retenir la fenêtre si `differences <= 1`. Cela accepte 0 ou 1 différence. Le compteur ne doit ni cumuler les fenêtres précédentes, ni être remis à zéro à chaque élément.
