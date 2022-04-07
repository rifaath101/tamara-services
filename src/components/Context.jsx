import React, { useState, createContext } from 'react'
import data from '../components/MOCK_DATA.json'
export const DataContext = createContext()

export const DataContextProvider = (props) => {
  const [customers, setCustomers] = useState(data)
  return (
    <DataContext.Provider value={[customers, setCustomers]}>
      {props.children}
    </DataContext.Provider>
  )
}
