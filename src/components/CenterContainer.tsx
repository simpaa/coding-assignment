import React from 'react';

import './CenterContainer.css';

interface Props {
  children: React.ReactNode
}

const CenterContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="center">
      {children}
    </div>
  );
}

export default CenterContainer;