import React from 'react'
import EditRow from './EditRow'
import ReadOnlyRow from './ReadOnlyRow'
const TableDesign = ({
  handleEditFormSubmit,
  editCustomerId,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditClick,
  handleDeleteClick,
  currentCustomers,
}) => {
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
                  <EditRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    customer={customer}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
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
