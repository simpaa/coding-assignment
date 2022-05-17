import React from 'react';

interface Props {
  text: String;
}

const heading: React.FC<Props> = ({ text }) => {
  return (
    <h1>{text}</h1>
  );
}

export default heading;