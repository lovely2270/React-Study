import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

//액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값을 변경
const INSERT = 'todos/INSERT'; //todo 등록
const TOGGLE = 'todos/TOGGLE'; //todo 체크
const REMOVE = 'todos/REMOVE'; //todo제거

//액션 생성함수 만들기
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 3;
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });
export const toggle = createAction(TOGGLE, (id) => id);
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });
export const remove = createAction(REMOVE, (id) => id);

//초기상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

//리듀서 함수 만들기
/*function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                done: !todo.done,
              }
            : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
}
*/
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
