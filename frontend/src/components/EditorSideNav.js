import React from 'react'
import { ListGroup } from 'react-bootstrap'

const EditorSideNav = () => {
  return (
    <ListGroup className="editor-sidenav-container">
      <ListGroup.Item>
        <i class="far fa-file"></i>
      </ListGroup.Item>
      <ListGroup.Item>
        <i class="fas fa-search"></i>
      </ListGroup.Item>
      <ListGroup.Item>
        <i class="fas fa-cog"></i>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default EditorSideNav
