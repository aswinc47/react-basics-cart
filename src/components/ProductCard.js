import React from 'react'
import Card from 'react-bootstrap/Card';
import '../App.css'
import { Link } from 'react-router-dom';

function ProductCard({productData}) {
  return (
    <Link to={`item/${productData.id}`} style={{textDecoration:'none' , color:'black'}} >
    <div className='cards'>
        <Card style={{ width: '18rem' , marginInline:'auto' }}>
          <Card.Img variant="top" src={productData.image} className='card-img p-4' />
          <Card.Body>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>
              {productData.category}
            </Card.Text>
            <Card.Text>
              <h3>{productData.price} $</h3>
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  </Link>
  )
}

export default ProductCard