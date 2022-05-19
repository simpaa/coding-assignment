
import React, { useEffect, useState } from "react";
import { Colleague } from "./Colleague"
import { fetchColleagues } from "./ColleaguesService";

interface ColleaguesContextState {
  colleagues: Colleague[];
  isLoading: boolean;
  error: Error | null;
}

const contextDefaultValues: ColleaguesContextState = {
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
  const [isLoading, setIsLoading] = useState<boolean>(contextDefaultValues.isLoading);
  const [error, setError] = useState<Error | null>(contextDefaultValues.error);

  const fetchData = () => {
    setIsLoading(true);
    console.log('called');
    
    fetchColleagues()
      .then((results) => {        
        setError(null);
        setIsLoading(false);
        setColleagues(results);
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
      colleagues,
      isLoading,
      error
    }}>
      {children}
    </ColleaguesContext.Provider>
  );
}