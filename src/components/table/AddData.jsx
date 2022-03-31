import { Button, TextField, Typography } from '@material-ui/core'
import React from 'react'

const AddData = ({ handleAddFormChange, handleAddFormSubmit }) => {
  return (
    <>
      <Typography style={{ marginTop: '3%' }} variant='h4'>
        Add a Customer
      </Typography>
      <form onSubmit={handleAddFormSubmit}>
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Customer-ID'
          name='customer_id'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Email'
          name='email'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='First Name'
          name='first_name'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Last Name'
          name='last_name'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Phone'
          name='phone'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Gender'
          name='gender'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Birth Date'
          name='birth_date'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Country Code'
          name='country_code'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Address'
          name='address'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Is Email Verified ?'
          name='is_email_verified'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='Is ID verified ?'
          name='is_id_verified'
          onChange={handleAddFormChange}
        />
        <TextField
          style={{ margin: '1%' }}
          id='standard-basic'
          required
          label='National ID'
          name='national_id'
          onChange={handleAddFormChange}
        />
        <Button
          style={{ marginTop: '2%' }}
          type='submit'
          variant='contained'
          color='primary'
        >
          Add
        </Button>
      </form>
    </>
  )
}

export default AddData
