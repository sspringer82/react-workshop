# Aufgabe 4

Lagere die Darstellung der Listeneinträge in eine Kindkomponente aus.

Reiche die Information über die Darstellung (aka Recipe) per Prop hinein.
Reiche die Funktionalität zum Löschen ebenfalls als Prop hinein.

```
type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
}
```
