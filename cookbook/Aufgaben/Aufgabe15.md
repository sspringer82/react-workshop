# Aufgabe 15

Überprüfe in der RecipeListItem-Komponente, ob der Klick auf den delete-Button die onDelete-Callback-Funktion korrekt triggert.

`const spy = jest.fn()` => Spy-Funktion

`expect(spy).toHaveBeenCalledWith('xxx')` => Spy überprüfen

`fireEvent.click(<ELEMENT>)` => klick feuern
