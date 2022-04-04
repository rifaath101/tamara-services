import React from 'react'
import UserViewTableDesign from './UserViewTableDesign'
import Pagination from '../Pagination'

const UserViewTable = ({
  customers,
  setCustomers,
  currentCustomers,
  paginate,
  customersPerPage,
}) => {
  return (
    <>
      <UserViewTableDesign
        customers={customers}
        currentCustomers={currentCustomers}
      />
      <Pagination
        paginate={paginate}
        customersPerPage={customersPerPage}
        totalCustomers={customers.length}
      />
    </>
  )
}

export default UserViewTable
