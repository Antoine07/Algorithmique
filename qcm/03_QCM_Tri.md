# QCM — Le tri à bulles

5 questions pour vérifier les notions du cours sur le tri.

**Une seule bonne réponse par question. Un point par bonne réponse.**

## Question 1 — Comparer ne suffit pas

Que contient la liste après ce programme ?

```python
nombres = [7, 2]
if nombres[0] > nombres[1]:
    print("À inverser")
```

A. `[2, 7]`  
B. `[7, 2]`  
C. `[7, 7]`  
D. `[]`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** La liste reste `[7, 2]`. Le programme affiche un message, mais aucune affectation ne modifie ses éléments.

A supposerait un échange. C supposerait un remplacement et D une suppression : aucune de ces opérations ne figure dans le code.

</details>

## Question 2 — Un seul passage

On effectue un seul passage de gauche à droite sur `[4, 1, 3, 2]`, en échangeant les voisins si la valeur de gauche est plus grande. Quel résultat obtient-on ?

A. `[1, 2, 3, 4]`  
B. `[4, 3, 2, 1]`  
C. `[1, 4, 3, 2]`  
D. `[1, 3, 2, 4]`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** 4 avance successivement devant 1, puis 3, puis 2. Le résultat est `[1, 3, 2, 4]` : seul le maximum est assuré d’être définitivement placé après ce passage.

A est le résultat du tri complet. B est un ordre décroissant. C s’arrête après le premier échange.

</details>

## Question 3 — Réduire la partie à parcourir

Pour une liste de longueur 5 et `passage = 2`, quelles valeurs prend `i` dans `range(len(nombres) - 1 - passage)` ?

A. 0 et 1  
B. 0, 1 et 2  
C. 2, 3 et 4  
D. 0, 1, 2 et 3

<details><summary>Réponse et feedback</summary>

**Réponse : A.** La borne vaut `5 - 1 - 2 = 2`. `range(2)` donne 0 et 1. Deux valeurs à droite ont déjà été placées par les passages précédents.

B inclut à tort la borne finale. C commence au numéro du passage au lieu de 0. D oublie de réduire la borne.

</details>

## Question 4 — Choisir un ordre décroissant

Quel test déclenche l’échange de deux voisins pour trier du plus grand au plus petit ?

A. `nombres[i] > nombres[i + 1]`  
B. `nombres[i] == nombres[i + 1]`  
C. `nombres[i] < nombres[i + 1]`  
D. `nombres[i] != nombres[i + 1]`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** Il faut échanger lorsque la valeur de gauche est plus petite que celle de droite : la plus grande passe alors devant.

A correspond à l’ordre croissant. B ne traite que les égalités. D échange aussi des couples déjà dans le bon ordre.

</details>

## Question 5 — Arrêter les passages

Dans la version optimisée, que fait-on après un passage complet sans aucun échange ?

A. Recommencer obligatoirement tous les passages restants.  
B. Arrêter la boucle extérieure avec `break`.  
C. Arrêter dès la première comparaison sans échange.  
D. Inverser la liste.

<details><summary>Réponse et feedback</summary>

**Réponse : B.** Un passage complet sans échange montre qu’aucun couple voisin n’est dans le mauvais ordre. On peut arrêter la boucle extérieure. Le booléen de suivi est remis à `False` au début de chaque passage.

A ignore l’optimisation. C conclut trop tôt : les couples suivants peuvent encore être désordonnés. D détruirait l’ordre obtenu.

</details>
