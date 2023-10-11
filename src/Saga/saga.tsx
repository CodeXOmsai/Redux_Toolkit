// sagas.js
import { put, takeLatest, delay } from 'redux-saga/effects';
import { addTodo, addTodoSuccess } from '../features/todo/todoSlice';

function* addTodoSaga(action: ReturnType<typeof addTodo>) {
  yield delay(1000); // Simulate a 1-second delay
  yield put(addTodoSuccess(action.payload)); // Dispatch the addTodoSuccess action with the payload from the addTodo action
}

export function* rootSaga() {
  yield takeLatest(addTodo.type, addTodoSaga);
}
