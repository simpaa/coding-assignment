import React, { useContext } from 'react';
import CardGridContainer from '../components/CardGridContainer';

import CenterContainer from '../components/CenterContainer';
import ColleagueCard from '../components/ColleagueCard';
import ColleagueFilter from '../components/ColleagueFilter';
import Heading from '../components/Heading';
import { ColleaguesContext } from '../data/colleagues/ColleaguesContext';

const Colleagues: React.FC = () => {

  const { colleagues, isLoading, error, filterColleagues } = useContext(ColleaguesContext);

  return (
    <CenterContainer>
      <header>
        <Heading text="The fellowship of the 13|37" />
      </header>

      <ColleagueFilter onFilter={filterColleagues} />

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