# Aufgabe 10

Lagere die Rezeptdaten in einen Context aus.

`createContext` zum Erstellen des Contextes.

`useContext` für den Zugriff auf den Context.

Provider, der den Wert zur Verfügung stellt: `<Context.Provider value={...}>...</Context.Provider>`

```
type ContextType = [string, Dispatch<SetStateAction<string>>];

const Context = createContext<ContextType>(['', () => {}]);
```
