import React, {useEffect} from 'react'
import './style.css'
import { Container } from '@mui/material'
import {Typography} from '@mui/material'
import Product from '../products'
import {Divider} from '@mui/material'
import AOS from 'aos'


const Hero = () => {

  useEffect(()=>{
        AOS.init({
            duration: 3000
        })
    },[])

    return (
        <>
        <Container className='heroGrid' disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography data-aos="fade-right" className='heroContent'
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
           <span class='exciting-font'>WhiskyTopia</span>
        </Typography>
        <Typography data-aos="fade-left"  className='heroContent' variant="h5" align="center" color="text.secondary" component="p">
         <b>A Scotch Whisky gift review site</b>
        </Typography>

      </Container>
      <div>
          <Divider   className='Divider' textAlign="right"></Divider>

      </div>



        </>
    )
}
 export default Hero