import React, { useEffect, useState } from 'react'
import './ProductView.css'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Addtocart from './Addtocart';

function ProductView() {

    const params = useParams()

    let [products,setProducts] = useState([])
    let [modalShow, setModalShow] = React.useState(false);

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

    const product = products.find(product => product.id == params.id)


    return (
      <>
        {product ? (
          <Container style={{ height: "80vh" }}>
            <Row className="mt-5 pt-5">
              <Col md={4} className="px-5 py-5">
                <img src={product.image} className="rest-img"></img>
              </Col>
              <Col md={8} className="pt-3 px-5 rest-details">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h4 style={{ textTransform: "capitalize" }}>
                  {product.category}
                </h4>
                <div className="w-75 d-flex align-items-center justify-content-between">
                  <div>
                    <h1>$ {product.price}</h1>
                    <h4 className="mt-2">
                      Rated{" "}
                      <span className="h3 bolder">{product.rating.rate}</span>{" "}
                      by {product.rating.count} users
                    </h4>
                  </div>
                  <div>
                    <button onClick={() => setModalShow(true)} className="btn btn-primary px-5 py-4 h3">
                      <h5 className="m-0 text-secondary bolder"  >Add to cart</h5>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
            <Addtocart
                show={modalShow}
                onHide={() => setModalShow(false)}
                onConfirm = {()=>{
                    setModalShow(false)
                    alert(`${product.title} purchased successfully.`)
                }}
                product = {product}
            />
          </Container>
        ) : (
          ""
        )}

        
      </>
    );
}

export default ProductView