import React from 'react'
import AdminTable from './AdminTable'
import UserViewTable from './user-view/UserViewTable'
import { DataContextProvider } from './context/Context'

const FinalData = () => {
  return (
    <DataContextProvider>
      <AdminTable />

      {/*<UserViewTable />*/}
    </DataContextProvider>
  )
}

export default FinalData
