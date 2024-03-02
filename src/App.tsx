import { Button } from '@chakra-ui/react'
import './App.css'
import { useEffect, useState } from 'react'
import { Todo } from './domain/todo';
import { getAlltodos } from './lib/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getAlltodosFunc = async () => {
      const todosData = await getAlltodos();
      setTodos(todosData)
    }
    getAlltodosFunc()
  }, []);

  return (
    <>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.name}</div>
      }
      )}
      <Button colorScheme='teal'>Button</Button>
    </>
  )
}

export default App
