import React from 'react'

const AddDataStyling = ({ handleAddFormSubmit, handleAddFormChange }) => {
  return (
    <div className='add-data-con'>
      <h2 style={{ marginLeft: '1%' }}>Add a Customer</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          className='add-input'
          type='text'
          name='customer_id'
          required='required'
          placeholder='Customer ID'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='text'
          name='email'
          required='required'
          placeholder='Email'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='text'
          name='first_name'
          required='required'
          placeholder='First Name'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='text'
          name='last_name'
          required='required'
          placeholder='Last Name'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='tel'
          name='phone_number'
          required='required'
          placeholder='Phone'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='text'
          name='gender'
          required='required'
          placeholder='Gender'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='date'
          name='birth_date'
          required='required'
          placeholder='Birth Date'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='text'
          name='country_code'
          required='required'
          placeholder='Country Code'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='text'
          name='address'
          required='required'
          placeholder='Address'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='email'
          name='is_email_verified'
          required='required'
          placeholder='Is Email verified ?'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='text'
          name='is_id_verified'
          required='required'
          placeholder='Is ID verified ?'
          onChange={handleAddFormChange}
        />
        <input
          className='add-input'
          type='text'
          name='national_id'
          required='required'
          placeholder='National ID'
          onChange={handleAddFormChange}
        />
        <button className='right-btn' type='submit'>
          Add
        </button>
      </form>
    </div>
  )
}

export default AddDataStyling
