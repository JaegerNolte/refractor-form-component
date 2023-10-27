function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Ave Delphinus',
      isCompleted: false,
    },
    {
      text: 'Selachimorpha',
      isCompleted: false,
    },
    {
      text: 'Dinoflagellata',
      isCompleted: false,
    }, 
    {
      text: 'Chelinoiodea',
      isCompleted: false,
    },
    {
      text: 'Cetacea',
      isCompleted: false,
    }, 
    {
      text: 'Certian doom - assured destruction of finite ecosystems.',
      isCompleted: false,
    }          
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => (
            <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
      );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
