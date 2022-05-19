import React, { useContext } from 'react';
import CardGridContainer from '../components/CardGridContainer';

import CenterContainer from '../components/CenterContainer';
import ColleagueCard from '../components/ColleagueCard';
import Heading from '../components/Heading';
import { ColleaguesContext } from '../data/colleagues/ColleaguesContext';
import './Colleagues.css';

const Colleagues: React.FC = () => {

  const { colleagues, isLoading, error } = useContext(ColleaguesContext);

  return (
    <div>
      <header>
        <Heading text="The fellowship of the 13|37" />
      </header>

      {error && (
        <h3>Failed to colleagues...</h3>
      )}

      <CenterContainer>
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

    </div>
  );
}

export default Colleagues;