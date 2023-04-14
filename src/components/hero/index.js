import React from 'react'
import './style.css'
import { Container } from '@mui/material'
import {Typography} from '@mui/material'
import Product from '../products'
import {Divider} from '@mui/material'


const Hero = () => {
    return (
        <>
        <Container className='heroGrid' disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography className='heroContent'
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          WhiskyTopia
        </Typography>
        <Typography className='heroContent' variant="h5" align="center" color="text.secondary" component="p">
         A Scotch Whisky gift review site…
        </Typography>

      </Container>
      <div>
          <Divider   className='Divider' textAlign="right"></Divider>

      </div>



        </>
    )
}
 export default Hero