import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from '@material-ui/core'
import React from 'react'
import data from './Data'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const CustomerTable = () => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
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
          {data.map((data) => (
            <TableRow key={data.name}>
              <TableCell component='th' scope='row'>
                {data.name}
              </TableCell>
              <TableCell align='left'>{data.phone}</TableCell>
              <TableCell align='left'>{data.email}</TableCell>
              <TableCell align='left'>{data.country}</TableCell>
              <TableCell align='left'>{data.address}</TableCell>
              <TableCell align='left'>{data.region}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>{' '}
    </TableContainer>
  )
}

export default CustomerTable
