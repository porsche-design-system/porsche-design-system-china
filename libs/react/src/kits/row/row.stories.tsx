import React from 'react';
import { Col } from '../col/col';
import { Row } from './row';
import './row.stories.scss';

export default {
  title: 'Layout/Row',
  component: Row
};

export const RowStoryBook = () => {
  return (
    <div>
      <Row>
        <Col span={12} className="col1">
          12
        </Col>
        <Col span={12} className="col2">
          12
        </Col>
      </Row>
      <Row>
        <Col span={4} className="col1">
          4
        </Col>
        <Col span={20} className="col2">
          20
        </Col>
      </Row>
    </div>
  );
};
