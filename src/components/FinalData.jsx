import React, { useState, useContext } from 'react'
import AdminTable from './AdminTable'
import { DataContextProvider, DataContext } from './Context'

const FinalData = () => {
  const [customers, setCustomers] = useContext(DataContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [customersPerPage] = useState(14)

  const indexOfLastPost = currentPage * customersPerPage
  const indexOfFirstPost = indexOfLastPost - customersPerPage
  const currentCustomers = customers.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <DataContextProvider>
      <AdminTable
        customers={customers}
        setCustomers={setCustomers}
        currentCustomers={currentCustomers}
        paginate={paginate}
        customersPerPage={customersPerPage}
      />

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
