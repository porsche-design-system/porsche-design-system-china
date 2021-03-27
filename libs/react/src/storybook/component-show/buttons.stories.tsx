import React from 'react';
import { Col, Row, Button } from '../../';

import './buttons.stories.scss';

export default {
  title: 'Component Show/Buttons'
};

export const ButtonsStoryBook = () => {
  const buttonTypes = ['default', 'primary', 'secondary', 'text'];

  const renderButtonType = (type: any) => {
    return (
      <Row key={type}>
        <Col>
          <br />
          {type}
        </Col>
        <Col>
          <Button type={type}>按钮</Button>
        </Col>
        <Col>
          <Button type={type} className={'pui-button-type-' + type + '-hover'}>
            按钮
          </Button>
        </Col>
        <Col>
          <Button type={type} className={'pui-button-type-' + type + '-active'}>
            按钮
          </Button>
        </Col>
        <Col>
          <Button type={type} className={'pui-button-type-' + type + '-disabled'} disabled>
            按钮
          </Button>
        </Col>
        <Col>
          <Button type={type} loading>
            按钮
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <div>
      <Row className="headline">
        <Col>Type</Col>
        <Col>Default</Col>
        <Col>Hover</Col>
        <Col>Pressed</Col>
        <Col>Disabled</Col>
        <Col>Loading</Col>
      </Row>
      <br />
      {buttonTypes.map(type => {
        return renderButtonType(type);
      })}
    </div>
  );
};
