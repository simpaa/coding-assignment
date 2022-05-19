import React from 'react';
import './CardGridContainer.css';

interface Props {
  children: React.ReactNode
}

const CardGridContainer: React.FC<Props> = ({ children }) => {
  return (
    <section className='card-grid'>
      {children}
    </section>
  );
};

export default CardGridContainer;

