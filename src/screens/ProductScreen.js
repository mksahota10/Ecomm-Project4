import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import { listProductDetails, createProductReview } from '../actions/productActions'
// import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

function ProductScreen({ match }) {
   const product = products.find((p) => p._id == match.params.id)

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                <Image src= {product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}></Col>
                <Col md={3}></Col>
            </Row>


        </div >
    )
}

export default ProductScreen
