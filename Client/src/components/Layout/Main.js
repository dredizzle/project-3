import React from 'react'
import Grid from '@material-ui/core/Grid'
import Header from './Header'

//children  are the info from componets fx: Login/ Register

const Main = ({ children }) => (
  <div>
    <Header />
    <Grid container justify="center">
      <Grid item xs={10} sm={5} style={{ marginTop: 30 }}>
        {children}
      </Grid>
    </Grid>
  </div>
)
export default Main