import React, { useState } from 'react'
import { FileUpload, Row, Col, Button } from '../..'

import './file-upload.stories.scss'

export default {
  title: 'Data Entry/FileUpload',
  component: FileUpload
}

export const InputsStoryBook = () => {
  const [value, setValue] = useState('')

  return (
    <Row>
      <Col span={12}>
        <div className="states">Default</div>

        <div>
          <FileUpload
            // action='https://jsonplaceholder.typicode.com/todos/'
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          />
        </div>
      </Col>
    </Row>
  )
}
