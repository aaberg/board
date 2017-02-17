export const DRAG_MOVE = 'DRAG_MOVE';
export const DRAG_MOVE_END = 'DRAG_MOVE_END';

export function onDragMove(dx, dy) {
  return {
    type: DRAG_MOVE,
    dx,
    dy,
  };
}
