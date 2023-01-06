import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Category({filterByCategory}) {

  const onFilter = (cat) => {
    filterByCategory(cat)
  }

  return (
    <Row className='my-2 mb-5'>
     <Col sm='12' className='d-flex justify-content-center'> 
          <div>
               <button onClick={() => onFilter('All')} style={{border: "1px solid #b45b35", background: "#B45B35", color:"white"}} className='btn mx-2'>All</button>
               <button onClick={() => onFilter('Breakfast')} style={{border: "1px solid #b45b35"}} className='btn mx-2'>Breakfast</button>
               <button onClick={() => onFilter('Lunch')} style={{border: "1px solid #b45b35"}} className='btn mx-2'>Lunch</button>
               <button onClick={() => onFilter('Dinner')} style={{border: "1px solid #b45b35"}} className='btn mx-2'>Dinner</button>
          </div>
     </Col>
    </Row>
  )
}

export default Category