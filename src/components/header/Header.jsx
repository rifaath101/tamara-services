import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.heading}>
          Tamara Services
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
