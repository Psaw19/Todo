import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";
import { RootState } from "../app/store";

interface Todo {
  id: string;
  text: string;
}

function Todos() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-gray-400 p-3 space-y-2 rounded w-2/5">
        {todos.length !== 0 ? (
          todos.map((todo: Todo) => (
            <li className="flex items-center justify-between" key={todo.id}>
              <div>{todo.text}</div>
              <button
                className="bg-red-500 w-6 h-6 flex items-center justify-center text-white rounded-full"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
            </li>
          ))
        ) : (
          <div className="text-green-200 text-center">
            Hurray you have completed all your tasks....
          </div>
        )}
      </div>
    </>
  );
}

export default Todos;
