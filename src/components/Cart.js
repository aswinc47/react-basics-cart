import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';
import { Container } from 'react-bootstrap';

function Cart() {

    let [products,setProducts] = useState([])

    const fetchProducts= async()=>{
        const result = await fetch('/ecommerce.json')
        result.json().then(data=>{
            setProducts(data) 
        })
    }

    console.log(products);

    useEffect(()=>{
        fetchProducts()
    },[])

  return (
    <div class='container'>
        <Row>
        {
            products.map((item)=>(
                <Col className='pt-5 pb-4 text-center' lg={3} md={6} sm={12} >
                    <ProductCard productData={item} ></ProductCard>
                </Col>
            ))
        }
        </Row>
    </div>
  )
}

export default Cart