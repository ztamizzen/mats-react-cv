import { INCREMENT, DECREMENT } from '../actions/actionTypes';

export default function counterReducer(count = 0, action) {
  switch (action.type) {
    case INCREMENT: return count + 1;
    case DECREMENT: return count - 1;
    default: return count;
  }
}
