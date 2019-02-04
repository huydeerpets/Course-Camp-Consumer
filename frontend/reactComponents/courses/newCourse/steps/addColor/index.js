import React from 'react';
import { Button, Col, Form, Icon, Popover, Row } from 'antd';
import { SketchPicker } from 'react-color'
import { infoPopoverContent } from './popoverContent';
import Localization from '../../localization';
const AddColorLocalized = Localization.Steps.AddColor;

const AddColor = props => (
    <div>
      <Form layout='horizontal' hideRequiredMark>
        <Row gutter={ 16 }>
          <Col span={ 24 }>
            <label className='new-course-form-main-label'>{ AddColorLocalized.Label }
              <Popover content={ infoPopoverContent } title={ AddColorLocalized.PopoverTitle }>
                <Icon className='new-course-form-main-popover-icon'
                  type='info-circle'>
                </Icon>
              </Popover>
            </label>
            <SketchPicker color={ props.container.state.color } onChange={ color => props.container.updateState('color', color.hex) } />
          </Col>
        </Row>
        <div className='new-course-button-container'>
          <Button
              className='new-course-next-and-back-button'
              type="primary"
              disabled={ props.container.state.color.trim() === '' }
              onClick={ () => props.container.nextStep() }>
            <Icon type='arrow-right' />
            { Localization.Next }
          </Button>
          <Button
              className='new-course-next-and-back-button'
              type="primary"
              onClick={() => props.container.prevStep()}>
            <Icon type='arrow-left' />
            { Localization.Back }
          </Button>
        </div>
      </Form>
    </div>
);

export default AddColor;