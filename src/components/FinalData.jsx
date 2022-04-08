import React from 'react'
import AdminTable from './AdminTable'
import { DataContextProvider } from './context/Context'

const FinalData = () => {
  return (
    <DataContextProvider>
      <AdminTable />

      {/*<UserViewTable
        customers={customers}
        setCustomers={setCustomers}
        currentCustomers={currentCustomers}
        paginate={paginate}
        customersPerPage={customersPerPage}
  />*/}
    </DataContextProvider>
  )
}

export default FinalData
