import React, { useContext } from 'react';
import CardGridContainer from '../components/CardGridContainer';

import CenterContainer from '../components/CenterContainer';
import ColleagueCard from '../components/ColleagueCard';
import Heading from '../components/Heading';
import { ColleaguesContext } from '../data/colleagues/ColleaguesContext';

const Colleagues: React.FC = () => {

  const { colleagues, isLoading, error } = useContext(ColleaguesContext);

  return (
    <CenterContainer>
      <header>
        <Heading text="The fellowship of the 13|37" />
      </header>

      {error && (
        <h3>Failed to colleagues...</h3>
      )}

      {isLoading ? (
        <h3>Loading colleagues...</h3>
      ) : (
        <CardGridContainer>
          {colleagues.map((colleague, key) => (
            <ColleagueCard colleague={colleague} key={key} />
          ))}
        </CardGridContainer>

      )}
    </CenterContainer>
  );
}

export default Colleagues;