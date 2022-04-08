import React, { useContext } from 'react'
import { DataContext } from './context/Context'
import EditRow from './EditRow'
import ReadOnlyRow from './ReadOnlyRow'

const TableDesign = ({ handleEditFormSubmit, editCustomerId }) => {
  const { currentCustomers } = useContext(DataContext)

  return (
    <div className='table-wrapper'>
      <form className='data-form' onSubmit={handleEditFormSubmit}>
        <table className='fl-table'>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <>
                {editCustomerId === customer.customer_id ? (
                  <EditRow />
                ) : (
                  <ReadOnlyRow customer={customer} />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default TableDesign
