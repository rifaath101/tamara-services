import React, { useState, useContext } from 'react'
import TableDesign from './TableDesign'
import AddData from './addData/AddData'
import Pagination from './Pagination'
import { DataContext } from './context/Context'

const BasicTable = () => {
  const {
    customers,
    setCustomers,
    editFormData,
    editCustomerId,
    setEditCustomerId,
  } = useContext(DataContext)

  const [addFormData, setAddFormData] = useState({
    customer_id: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    gender: '',
    birth_date: '',
    country_code: '',
    address: '',
    is_email_verified: '',
    is_id_verified: '',
    national_id: '',
  })

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const editedCustomer = {
      customer_id: editCustomerId,
      email: editFormData.email,
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      phone_number: editFormData.phone_number,
      gender: editFormData.gender,
      birth_date: editFormData.birth_date,
      country_code: editFormData.country_code,
      address: editFormData.address,
      is_email_verified: editFormData.is_email_verified,
      is_id_verified: editFormData.is_id_verified,
      national_id: editFormData.national_id,
    }

    const newCustomers = [...customers]

    const index = customers.findIndex(
      (customer) => customer.customer_id === editCustomerId
    )

    newCustomers[index] = editedCustomer

    setCustomers(newCustomers)
    setEditCustomerId(null)
  }

  return (
    <div className='app-container'>
      <TableDesign
        handleEditFormSubmit={handleEditFormSubmit}
        editCustomerId={editCustomerId}
      />
      <Pagination totalCustomers={customers.length} />
      <AddData addFormData={addFormData} setAddFormData={setAddFormData} />
    </div>
  )
}
export default BasicTable
