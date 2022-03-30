import React, { useState } from 'react'
import data from './Data'
import {
  TablePagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  TextField,
  Typography,
  Button,
  Paper,
} from '@material-ui/core'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    height: '100vh',
  },
})

const BasicTable = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(9)
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    region: '',
  })

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

  const classes = useStyles()

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='left'>Phone</TableCell>
              <TableCell align='left'>Email</TableCell>
              <TableCell align='left'>Address</TableCell>
              <TableCell align='left'>Country</TableCell>
              <TableCell align='left'>Region</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='left'>{row.phone}</TableCell>
                  <TableCell align='left'>{row.email}</TableCell>
                  <TableCell align='left'>{row.country}</TableCell>
                  <TableCell align='left'>{row.address}</TableCell>
                  <TableCell align='left'>{row.region}</TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6}></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Typography style={{ marginTop: '3%' }} variant='h4'>
          Add a Customer
        </Typography>
        <form>
          <TextField
            style={{ marginRight: '3%' }}
            id='standard-basic'
            required
            label='Name'
            name='name'
            onChange={handleAddFormChange}
          />
          <TextField
            style={{ marginRight: '3%' }}
            id='standard-basic'
            required
            label='Phone'
            name='phone'
            onChange={handleAddFormChange}
          />
          <TextField
            style={{ marginRight: '3%' }}
            id='standard-basic'
            required
            label='Email'
            name='email'
            onChange={handleAddFormChange}
          />
          <TextField
            style={{ marginRight: '3%' }}
            id='standard-basic'
            required
            label='Country'
            name='country'
            onChange={handleAddFormChange}
          />
          <TextField
            style={{ marginRight: '3%' }}
            id='standard-basic'
            required
            label='Address'
            name='address'
            onChange={handleAddFormChange}
          />
          <TextField
            style={{ marginRight: '3%' }}
            id='standard-basic'
            required
            label='Region'
            name='region'
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

        <TablePagination
          style={{ marginTop: '3%' }}
          component='div'
          rowsPerPageOptions={[9, 18, 27]}
          colSpan={3}
          count={data.length}
          page={page}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  )
}

export default BasicTable
