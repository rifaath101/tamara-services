import React, { useState } from 'react'
import {
  TablePagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
} from '@material-ui/core'
import AddData from './AddData'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    height: '100vh',
  },
})

const TableDesign = ({
  customerInfo,
  handleAddFormSubmit,
  handleAddFormChange,
}) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(15)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Customer-ID</TableCell>
              <TableCell align='left'>Email</TableCell>
              <TableCell align='left'>First Name</TableCell>
              <TableCell align='left'>Last Name</TableCell>
              <TableCell align='left'>Phone</TableCell>
              <TableCell align='left'>Gender</TableCell>
              <TableCell align='left'>Birth-Date</TableCell>
              <TableCell align='left'>Country-Code</TableCell>
              <TableCell align='left'>Address</TableCell>
              <TableCell align='left'>Is-Email-Verified</TableCell>
              <TableCell align='left'>Is-ID-Verified</TableCell>
              <TableCell align='left'>National-ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerInfo
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer, index) => (
                <TableRow key={customer.customer_id}>
                  <TableCell component='th' scope='row'>
                    {customer.customer_id}
                  </TableCell>
                  <TableCell align='left'>{customer.email}</TableCell>
                  <TableCell align='left'>{customer.first_name}</TableCell>
                  <TableCell align='left'>{customer.last_name}</TableCell>
                  <TableCell align='left'>{customer.phone_number}</TableCell>
                  <TableCell align='left'>{customer.gender}</TableCell>
                  <TableCell align='left'>{customer.birth_date}</TableCell>
                  <TableCell align='left'>{customer.country_code}</TableCell>
                  <TableCell align='left'>{customer.address}</TableCell>
                  <TableCell align='left'>
                    {customer.is_email_verified ? 'true' : 'false'}
                  </TableCell>
                  <TableCell align='left'>
                    {customer.is_id_verified ? 'true' : 'false'}
                  </TableCell>
                  <TableCell align='left'>{customer.national_id}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[15, 20, 25]}
          component='div'
          count={customerInfo.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <AddData
          handleAddFormChange={handleAddFormChange}
          handleAddFormSubmit={handleAddFormSubmit}
        />
      </TableContainer>
    </>
  )
}

export default TableDesign
