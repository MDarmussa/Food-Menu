import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
const ItemLists = () => {
  return (
    <Row>
     <Col sm="12" className='mb-3'>
          <Card className='d-flex flex-row' style={{backgroundColor: "#F8F8F8"}}>
               <div>
                    <Card.Img className="img-item" variant="top" src="2.png" />
               </div>
               <Card.Body>
                    <Card.Title className='d-flex justify-content-between'>
                         <div className='item-title'>Breakfast</div>
                         <div className='item-price'>$ 50</div>
                    </Card.Title>
                    <Card.Text className='py-2'>
                         <div className='item-description'>Breakfast Description</div>
                    </Card.Text>
               </Card.Body>
          </Card>
          </Col>
    </Row>
  )
}

export default ItemLists