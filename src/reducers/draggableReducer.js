import * as actions from '../actions/draggableActions';

export default function draggableReducer(state = { x: 0, y: 0 }, action) {
  switch (action.type) {
    case actions.DRAG_MOVE: {
      let { x, y } = state;
      x += action.dx;
      y += action.dy;
      return { ...state, x, y };
    }
    default: {
      return state;
    }
  }
}
