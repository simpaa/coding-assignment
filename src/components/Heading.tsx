import React from 'react';

interface Props {
  text: String;
}

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <h1>{text}</h1>
  );
}

export default Heading;