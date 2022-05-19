import React from 'react';
import { Colleague } from '../data/colleagues/Colleague';
import './ColleagueCard.css';

interface Props {
  colleague: Colleague;
}

const ColleagueCard: React.FC<Props> = ({ colleague }) => {
  const { name, office, imagePortraitUrl} = colleague;

  return (
    <article className="card">
      <img src={imagePortraitUrl} alt="Colleague Portrai" />
      <h1>{name}</h1>
      <span>Office: {office}</span>
    </article>
  );
};

export default ColleagueCard;