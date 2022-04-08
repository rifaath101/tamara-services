import React, { useContext } from 'react'
import { DataContext } from './context/Context'

const ReadOnlyRow = ({ customer }) => {
  const { handleEditClick } = useContext(DataContext)
  const { handleDeleteClick } = useContext(DataContext)
  return (
    <tr>
      <td>{customer.customer_id}</td>
      <td>{customer.email}</td>
      <td>{customer.first_name}</td>
      <td>{customer.last_name}</td>
      <td>{customer.phone_number}</td>
      <td>{customer.gender}</td>
      <td>{customer.birth_date}</td>
      <td>{customer.country_code}</td>
      <td>{customer.address}</td>
      <td>{customer.is_email_verified ? 'true' : 'false'}</td>
      <td>{customer.is_id_verified ? 'true' : 'false'}</td>
      <td>{customer.national_id}</td>
      <td>
        <button
          type='button'
          className='left-btn'
          onClick={(event) => handleEditClick(event, customer)}
        >
          Edit
        </button>
        <button
          type='button'
          className='right-btn'
          onClick={() => handleDeleteClick(customer.customer_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
export default ReadOnlyRow
