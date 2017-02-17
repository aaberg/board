import React from 'react';
import interact from 'interact.js';

export default class DraggableComponent extends React.Component {

  static propTypes = {
    onDragMove: React.PropTypes.func.isRequired,
    onDragEnd: React.PropTypes.func,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
  };

  static defaultProps = {
    onDragEnd: () => {},
    x: 0,
    y: 0,
  };

  componentDidMount() {
    interact(this.refs.draggable)
      .draggable({
        inertia: true,
        autoScroll: true,
        onmove: this.onDragMove.bind(this),
        onend: this.onDragEnd.bind(this),
        restrict: {
          restriction: 'parent',
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        },
      });
  }

  onDragMove({ dx, dy }) {
    this.props.onDragMove(dx, dy);
  }

  onDragEnd() {
    this.props.onDragEnd();
  }

  render() {
    return (
      <rect ref="draggable" x={this.props.x} y={this.props.y} width={150} height={80} className="note" />
    );
  }

}
