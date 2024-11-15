import React, {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import products from '../../products.json'
import CardMedia from '@mui/material/CardMedia';
import './style.css'
import AOS from 'aos';

const Product = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState({})

    const handleModalOpen = (product) => {
        setModalOpen(true);
        setModalContent(product);
    };
    const handleModalClose = () => {
        setModalOpen(false);
        setModalContent({});
    };




      useEffect(()=>{
        AOS.init({
            duration: 3000
        })
    },[])

  return (
    <>
     <Typography variant='h4' sx={{ textAlign: 'center', padding: '10px' }}>Reviewed Product</Typography>
      <Box className='project' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {products.map((product) => (
          <Card id='products' data-aos="fade-up"  key={product.id} sx={{boxShadow: '0px 0px 10px 0px grey', maxWidth: 345, padding: '10px'}}>
            <CardMedia
               component="img"
               alt={product.alt}
               image = {require(`${product.image}`)}
               sx={{height: "150px", objectFit: "scale-down"}}
            />
            <CardContent sx={{ textAlign: 'center' }} >
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px' }}>
              <img onClick={() => handleModalOpen(product)} className="goldenBtn" src={require('./assets/goldenBtn.png')} style={{ width: '60px' }} />
                  <Button   sx={{ color: "#F5A623" }} 
    variant="contained" 
    className='projectBtn' 
    size="small" 
    href={product.link} // Use the link field from products.json
    target="_blank" 
    rel="noopener noreferrer"
                  >{product.price}</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
       {modalOpen && (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <h2>{modalContent.title}</h2>
        <p>{modalContent.description}</p>
        <p>{modalContent.review}</p>
        
      </div>
    </div>
  )}
    </>
  );
};

export default Product;

 