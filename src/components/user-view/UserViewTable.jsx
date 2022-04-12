import React, { useContext } from 'react'
import UserViewTableDesign from './UserViewTableDesign'
import Pagination from '../Pagination'
import { DataContext } from '../context/Context'

const UserViewTable = () => {
  const { customers } = useContext(DataContext)

  return (
    <>
      <UserViewTableDesign />
      <Pagination totalCustomers={customers.length} />
    </>
  )
}

export default UserViewTable
