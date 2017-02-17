import React from 'react';

export default class Canvas extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  static defaultProps = {
    children: <div>empty</div>,
  };

  componentDidMount() {

  }

  render() {
    return (
      <svg ref="canvas" width="500" height="500" viewBox="0 0 500 500" className="canvas">{this.props.children}</svg>
    );
  }

}
