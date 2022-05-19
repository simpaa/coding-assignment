import React, { useState } from 'react';
import { Filter } from '../data/colleagues/ColleaguesContext';
import './ColleagueFilter.css';

interface Props {
  onFilter: (filter: Filter) => void;
}

const ColleagueFilter: React.FC<Props> = ({ onFilter }) => {

  const [name, setName] = useState<string>('');
  const [office, setOffice] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    onFilter({ name, office });
  }

  const clear = () => {
    setName('');
    setOffice('');
    onFilter({name: '', office: ''});
  }

  return (
    <div className='colleague-filter'>
      <h3>Filter colleagues</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Office:
          <input type="text" value={office} onChange={e => setOffice(e.target.value)} />
        </label>
        <button type='submit'>Apply filter</button>
        <button type='button' onClick={clear}>Clear</button>
      </form>
    </div>
  );
};

export default ColleagueFilter;