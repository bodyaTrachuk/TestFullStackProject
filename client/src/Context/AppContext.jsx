import React from "react";

const initalAppState = {
  card: undefined,
  addCardItem: () => null,
  removeCardItem: () => null,
};

const AppContext = React.createContext(initalAppState);

export const AppProvider = ({ children }) => {
  const [cardState, setCardState] = React.useState([]);
  const [backetPrice, setBacketPrice] = React.useState(0);

  const addCardItem = (item) => setCardState([...cardState, item]);

  const removeCardItem = (id,price) => {
    const updatedCard = cardState.filter((el) => el.id !== id);
    console.log(updatedCard);
    setCardState(updatedCard);
    setBacketPrice(backetPrice - price)
  };

  return (
    <AppContext.Provider
      value={{
        card: cardState,
        setCardState,
        addCardItem,
        removeCardItem,
        backetPrice, setBacketPrice
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
