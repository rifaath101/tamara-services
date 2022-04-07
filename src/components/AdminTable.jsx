import React, { useState } from 'react'
import TableDesign from './TableDesign'
import AddData from './addData/AddData'
import Pagination from './Pagination'

const BasicTable = ({
  customers,
  setCustomers,
  currentCustomers,
  paginate,
  customersPerPage,
}) => {
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

  const [editFormData, setEditFormData] = useState({
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

  const [editCustomerId, setEditCustomerId] = useState(null)

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

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

  const handleEditClick = (event, customer) => {
    event.preventDefault()
    setEditCustomerId(customer.customer_id)

    const formValues = {
      customer_id: customer.customer_id,
      email: customer.email,
      first_name: customer.first_name,
      last_name: customer.last_name,
      phone_number: customer.phone_number,
      gender: customer.gender,
      birth_date: customer.birth_date,
      country_code: customer.country_code,
      address: customer.address,
      is_email_verified: customer.is_email_verified,
      is_id_verified: customer.is_id_verified,
      national_id: customer.national_id,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditCustomerId(null)
  }

  const handleDeleteClick = (customerId) => {
    const newCustomers = [...customers]

    const index = customers.findIndex(
      (customer) => customer.customer_id === customerId
    )

    newCustomers.splice(index, 1)

    setCustomers(newCustomers)
  }

  return (
    <div className='app-container'>
      <TableDesign
        handleEditFormSubmit={handleEditFormSubmit}
        currentCustomers={currentCustomers}
        editCustomerId={editCustomerId}
        editFormData={editFormData}
        handleEditFormChange={handleEditFormChange}
        handleCancelClick={handleCancelClick}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      <Pagination
        paginate={paginate}
        customersPerPage={customersPerPage}
        totalCustomers={customers.length}
      />
      <AddData
        addFormData={addFormData}
        customers={customers}
        setCustomers={setCustomers}
        setAddFormData={setAddFormData}
      />
    </div>
  )
}
export default BasicTable
