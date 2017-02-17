import { connect } from 'react-redux';
import { onDragMove } from '../actions/draggableActions';
import DraggableComponent from './DraggableComponent';

function mapStateToProps(state) {
  return {
    x: state.c.x,
    y: state.c.y,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDragMove: (dx, dy) => {
      dispatch(onDragMove(dx, dy));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DraggableComponent);
