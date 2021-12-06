import { ReactElement } from 'react';

// Name UpperCase first
// immer 1 Komponente pro Datei
// JSX = HTML in JavaScript
// React Elemente fangen mit einem Kleinbuchstaben an und mappen auf HTML-Elemente
const Component = (): ReactElement => {
  const name = 'React.js';

  const sun = <div>sun</div>;
  const rain = <div>rain</div>;
  const weather = 'rain';

  const names = ['Tick', 'Trick', 'Track'];

  return (
    <div>
      Hallo {name} {1 + 1}
      {weather !== 'rain' ? rain : sun}
      {getWeather(weather)}
      {names
        .filter((name) => name !== 'Trick')
        .map((name) => {
          return <div>{name}</div>;
        })}
    </div>
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
