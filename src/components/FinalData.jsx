import React, { useState } from 'react'
import data from './MOCK_DATA.json'
import AdminTable from './AdminTable'
import UserViewTable from './user-view/UserViewTable'

const FinalData = () => {
  const [customers, setCustomers] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const [customersPerPage] = useState(14)

  const indexOfLastPost = currentPage * customersPerPage
  const indexOfFirstPost = indexOfLastPost - customersPerPage
  const currentCustomers = customers.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
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
    </>
  )
}

export default FinalData
