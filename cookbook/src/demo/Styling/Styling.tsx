import { ReactElement } from 'react';
import './Styling.css';
import './Styling.scss';
import styles from './Styling.module.css';
import { Container, Headline } from './Styling.styles';

// 1. inline style mit style-Prop
// 2. css import - achtung nicht namespaced
// 3. SCSS! npm install node-sass
// 4. CSS Modules
// 5. CSS Libraries z.B. styled-componentsn (npm install styled-components @types/styled-components)

const Styling = (): ReactElement => {
  return (
    <>
      <div
        style={{ marginLeft: '2em', marginTop: 10 }}
        className="border demoStyling"
      >
        <h1>Hallo Welt</h1>
        <h2 style={{ backgroundColor: 'hotpink' }}>inline styling</h2>
        <h2 id="myHeadline">🐝 Bumblebee 🐝</h2>
        <div className="card">
          <div className="headline">Basti</div>
          <div className="content">JavaScript Frickel</div>
        </div>

        <div className="headline">HEADLINE</div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.headline}>CSS Modules</h1>
      </div>
      <Container>
        <Headline onClick={() => alert('you clicked the headline')}>
          Styled Components
        </Headline>
        Styled Content
      </Container>
    </>
  );
};

export default Styling;
