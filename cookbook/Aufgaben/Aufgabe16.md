# Aufgabe 16

Prüfe, ob die RecipeList-Komponente korrekt mit dem Server kommuniziert und Daten die über die Fetch-API zur Verfügung gestellt werden auch korrekt angezeigt werden.

```
global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => {}
      })
)
```

1. Basissetup für den Test
2. global.fetch mocken
3. RecipeContext einbinden
4. RecipeList innerhalb des Contextes rendern
5. Sichtbarkeit der Daten überprüfen
