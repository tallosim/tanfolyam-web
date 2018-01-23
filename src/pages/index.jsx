import React from 'react';
import Helmet from 'react-helmet';
import Container from '../components/Container';
import RadioButton from '../components/RadioButton';
import RadioButtonGroup from '../components/RadioButtonGroup';

const CoursesPage = () => (
  <div>
    <Helmet title="Tanfolyamok" />

    {/* TODO: Hero image */}

    <Container>
      <h2>
        <span role="img" aria-label="egy halom könyv">
          📚
        </span>{' '}
        Tanfolyamjainkról
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <h2>
        <span role="img" aria-label="nagyítóüveg">
          🔍
        </span>{' '}
        Keresés a tanfolyamok között
      </h2>
      <form>
        <h3>Milyen szakra jársz?</h3>
        <RadioButtonGroup name="programme">
          <RadioButton value="computerEngineering" label="Mérnökinformatikus" />
          <RadioButton value="electricalEngineering" label="Villamosmérnök" />
          <RadioButton value="other" label="Egyéb" />
        </RadioButtonGroup>

        <h3>Melyik évben kezdtél?</h3>
        <RadioButtonGroup name="startYear">
          <RadioButton value="2017" />
          <RadioButton value="2016" />
          <RadioButton value="2015" />
          <RadioButton value="other" label="Egyéb" />
        </RadioButtonGroup>

        <h3>Milyen témakörök iránt érdeklődsz?</h3>
        <div>TODO</div>
      </form>
    </Container>
  </div>
);

export default CoursesPage;