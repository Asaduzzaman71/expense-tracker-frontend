import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[
        { id: 1, amount: 500, text:'overtime'},
        { id: 2, amount: 1500, text:'salary'},
        { id: 3, amount: -500, text:'rent'},
        { id: 4, amount: -300, text:'food'},
        { id: 5, amount: -100, text:'elctricity'}
    ]
}

// create context
export const GlobalContext = createContext(initialState)
// provider component
export const  GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            { children }
        </GlobalContext.Provider>
    );
  }