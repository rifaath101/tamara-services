import React, { useContext } from 'react'
import { DataContext } from './context/Context'

const EditRow = () => {
  const { editFormData } = useContext(DataContext)
  const { handleEditFormChange } = useContext(DataContext)
  const { handleCancelClick } = useContext(DataContext)
  return (
    <tr>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Customer ID'
          name='customer_id'
          value={editFormData.customer_id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Email'
          name='email'
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='First Name'
          name='first_name'
          value={editFormData.first_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Last Name'
          name='last_name'
          value={editFormData.last_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Phone'
          name='phone_number'
          value={editFormData.phone_number}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Gender'
          name='gender'
          value={editFormData.gender}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Birth Date'
          name='birth_date'
          value={editFormData.birth_date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Country Code'
          name='country_code'
          value={editFormData.country_code}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Address'
          name='address'
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Is Email verified ?'
          name='is_email_verified'
          value={editFormData.is_email_verified}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Is ID verified ?'
          name='is_id_verified'
          value={editFormData.is_id_verified}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='National ID'
          name='national_id'
          value={editFormData.national_id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type='submit' className='left-btn'>
          Save
        </button>
        <button type='button' className='right-btn' onClick={handleCancelClick}>
          {' '}
          Cancel
        </button>
      </td>
    </tr>
  )
}

export default EditRow
