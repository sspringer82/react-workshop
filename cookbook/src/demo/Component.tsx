import React, { ReactElement } from 'react';

// Name UpperCase first
// immer 1 Komponente pro Datei
// JSX = HTML in JavaScript
// React Elemente fangen mit einem Kleinbuchstaben an und mappen auf HTML-Elemente
// eine Komponente muss genau ein Root-Element zurückgeben
const Component = (): ReactElement => {
  const name = 'React.js';

  const sun = <div>sun</div>;
  const rain = <div>rain</div>;
  const weather = 'rain';

  const characters = [
    { name: 'Tick', age: 42 },
    { name: 'Trick', age: 42 },
    { name: 'Track', age: 42 },
  ];

  return (
    <>
      <h1>Hallo Demo</h1>
      <div>
        Hallo {name} {1 + 1}
        {weather !== 'rain' ? rain : sun}
        {getWeather(weather)}
        {characters
          .filter((character) => character.name !== 'Trick')
          .map((character) => {
            return (
              <div>
                {character.name} ({character.age})
              </div>
            );
          })}
      </div>
    </>
  );
};

function getWeather(weather: string): ReactElement {
  const sun = <div>sun</div>;
  const rain = <div>rain</div>;
  const cloudy = <div>cloudy</div>;
  switch (weather) {
    case 'sun':
      return sun;
    case 'rain':
      return rain;
    case 'cloudy':
    default:
      return cloudy;
  }
}

export default Component;
