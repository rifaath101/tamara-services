import React, { useContext } from 'react'
import { DataContext } from '../context/Context'

const UserViewTableDesign = () => {
  const { currentCustomers } = useContext(DataContext)

  return (
    <div className='table-wrapper'>
      <form className='data-form'>
        <table class='fl-table'>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Birth Date</th>
              <th>Country Code</th>
              <th>Address</th>
              <th>Is Email verified ?</th>
              <th>Is ID verified ?</th>
              <th>National ID</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <>
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
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default UserViewTableDesign
