import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';



const ItemLists = ({itemsData}) => {
     console.log(itemsData)

  return (
    <Row>
     {
          itemsData.length >= 1 ? (itemsData.map((item) => {
               return (
                    <Col ket={item.id} sm="12" className='mb-3'>
                         <Card className='d-flex flex-row' style={{backgroundColor: "#F8F8F8"}}>
                              <div>
                                   <Card.Img className="img-item" variant="top" src={item.imgURL} />
                              </div>
                              <Card.Body>
                                   <Card.Title className='d-flex justify-content-between'>
                                        <div className='item-title'>{item.title}</div>
                                        <div className='item-price'>{item.price}</div>
                                   </Card.Title>
                                   <Card.Text className='py-2'>
                                        <div className='item-description'>{item.description}</div>
                                   </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
               )
          })) : <h3 className="text-center">No Categories Found</h3>
     }
    </Row>
  )
}

export default ItemLists