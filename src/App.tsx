import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gray-600 p-10">
        <div className="w-full flex-col gap-5 flex items-center justify-center">
          <div className="text-gray-300">
            Welcome to TodoApp using Redux toolkit + Typescript + Tailwind
          </div>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
