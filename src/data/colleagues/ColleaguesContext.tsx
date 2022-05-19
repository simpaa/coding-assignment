
import React, { useEffect, useState } from "react";
import { Colleague } from "./Colleague"
import { fetchColleagues } from "./ColleaguesService";

interface ColleaguesContextState {
  filterColleagues: (filter: Filter) => void;
  colleagues: Colleague[];
  isLoading: boolean;
  error: Error | null;
}

export interface Filter {
  name?: string;
  office?: string;
}

const contextDefaultValues: ColleaguesContextState = {
  filterColleagues: () => {},
  colleagues: [],
  isLoading: false,
  error: null,
};

export const ColleaguesContext = React.createContext<ColleaguesContextState>(contextDefaultValues);

interface Props {
  children?: React.ReactNode
}

export const ColleaguesContextProvider: React.FC<Props> = ({ children }) => {
  const [colleagues, setColleagues] = useState<Colleague[]>(contextDefaultValues.colleagues);
  const [filteredColleagues, setFilteredColleagues] = useState<Colleague[]>(contextDefaultValues.colleagues);
  const [isLoading, setIsLoading] = useState<boolean>(contextDefaultValues.isLoading);
  const [error, setError] = useState<Error | null>(contextDefaultValues.error);

  const filterColleagues = ({ name, office }: Filter) => {
    let items = colleagues;

    if (name) {
      items = items.filter(c => c.name?.toLowerCase().includes(name.toLowerCase()))
    }

    if (office) {
      items = items.filter(c => c.office?.toLowerCase().includes(office.toLowerCase()))
    }    

    setFilteredColleagues(items);
  };

  const fetchData = () => {
    setIsLoading(true);
    
    fetchColleagues()
      .then((results) => {        
        setError(null);
        setIsLoading(false);
        setColleagues(results);
        setFilteredColleagues(results);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ColleaguesContext.Provider value={{
      filterColleagues,
      colleagues: filteredColleagues,
      isLoading,
      error
    }}>
      {children}
    </ColleaguesContext.Provider>
  );
}