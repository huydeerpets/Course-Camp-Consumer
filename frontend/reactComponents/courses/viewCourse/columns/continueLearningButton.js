import React from 'react';
import { Button, message } from 'antd';
import { Link } from '../../../../../routes';

export default class ContinueLearningButton extends React.Component {
  state = {
    navigating: false
  }
  render() {
    return (
      <div className='continue-learning-wrapper column-wrapper'>
        <h1 style={{ transform: 'translateY(-8px)', marginTop: 35 }} className="section-title">
          <span>{ this.props.auth.name } { `${ this.props.course.price === 0 ? 'explore ' + this.props.course.title  : 'continue learning' }` }</span>
        </h1>
        <Link
          route={ `/courses/view/${ this.props.course._id }/track` }>
          <Button loading={ this.state.navigating } onClick={ () => this.setState({ navigating: true }) } type="primary">Explore</Button>
        </Link>
      </div>
    )
  }
}
