import React from 'react';
import { Colleague } from '../data/colleagues/Colleague';
import './ColleagueCard.css';

interface Props {
  colleague: Colleague;
}

const ColleagueCard: React.FC<Props> = ({ colleague }) => {
  const { name, office, imagePortraitUrl} = colleague;

  // Need to cast to string type with no capitalize latters for image src property
  const imageUrl = imagePortraitUrl as string;

  return (
    <article className="card">
      <img src={imageUrl} alt="Colleague Portrai" />
      <h1>{name}</h1>
      <span>Office: {office}</span>
    </article>
  );
};

export default ColleagueCard;