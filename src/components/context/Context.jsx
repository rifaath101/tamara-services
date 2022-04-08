import React, { useState, createContext } from 'react'
import data from '../data/MOCK_DATA.json'

export const DataContext = createContext({})

export const DataContextProvider = ({ children }) => {
  const [customers, setCustomers] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const [customersPerPage] = useState(14)

  const indexOfLastPost = currentPage * customersPerPage
  const indexOfFirstPost = indexOfLastPost - customersPerPage
  const currentCustomers = customers.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const [editCustomerId, setEditCustomerId] = useState(null)
  const handleCancelClick = () => {
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
  const handleDeleteClick = (customerId) => {
    const newCustomers = [...customers]

    const index = customers.findIndex(
      (customer) => customer.customer_id === customerId
    )

    newCustomers.splice(index, 1)

    setCustomers(newCustomers)
  }
  return (
    <DataContext.Provider
      value={{
        customers,
        setCustomers,
        currentCustomers,
        paginate,
        customersPerPage,
        editFormData,
        setEditFormData,
        handleEditFormChange,
        editCustomerId,
        setEditCustomerId,
        handleCancelClick,
        handleEditClick,
        handleDeleteClick,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
