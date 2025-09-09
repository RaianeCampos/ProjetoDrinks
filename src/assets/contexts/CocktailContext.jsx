import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  status: 'idle', 
  drink: null,
  error: null,
};

function cocktailReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, status: 'loading', error: null, drink: null };
    case 'FETCH_SUCCESS':
      return { ...state, status: 'success', drink: action.payload };
    case 'FETCH_ERROR':
      return { ...state, status: 'error', error: action.payload };
    default:
      throw new Error(Ação desconhecida: ${action.type});
  }
}

const CocktailContext = createContext();

export function CocktailProvider({ children }) {
  const [state, dispatch] = useReducer(cocktailReducer, initialState);

  return (
    <CocktailContext.Provider value={{ state, dispatch }}>
      {children}
    </CocktailContext.Provider>
  );
}

export function useCocktail() {
  const context = useContext(CocktailContext);
  if (context === undefined) {
    throw new Error('useCocktail deve ser usado dentro de um CocktailProvider');
  }
  return context;
}