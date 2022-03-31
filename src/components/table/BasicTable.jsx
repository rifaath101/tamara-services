import React, { useState } from 'react'
import data from './MOCK_DATA.json'
import TableDesign from './TableDesign'

const BasicTable = () => {
  const [customerInfo, setCustomerInfo] = useState(data)
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

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  /* Data modification */

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newCustomer = {
      customer_id: addFormData.customer_id,
      email: addFormData.email,
      first_name: addFormData.first_name,
      last_name: addFormData.last_name,
      phone_number: addFormData.phone_number,
      gender: addFormData.gender,
      birth_date: addFormData.birth_date,
      country_code: addFormData.country_code,
      address: addFormData.address,
      is_email_verified: addFormData.is_email_verified,
      is_id_verified: addFormData.is_id_verified,
      national_id: addFormData.national_id,
    }

    const newCustomers = [...customerInfo, newCustomer]
    setCustomerInfo(newCustomers)
  }

  return (
    <>
      <TableDesign
        customerInfo={customerInfo}
        handleAddFormSubmit={handleAddFormSubmit}
        handleAddFormChange={handleAddFormChange}
      />
    </>
  )
}

export default BasicTable
