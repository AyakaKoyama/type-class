import { Table, TableContainer, Tbody,  Th, Thead, Tr } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Todo } from './domain/todo';
import { getAlltodos } from './lib/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAlltodosFunc = async () => {
      const todosData = await getAlltodos();
      setTodos(todosData)
      setLoading(false)
    }
    getAlltodosFunc()
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }


  //インスタンス利用
  return (
    <>
      <TableContainer>
        <Table variant='simple' data-testid="table">
          <Thead>
            <Tr>
              <Th>タイトル</Th>
              <Th>完了</Th>
              <Th>日付</Th>

            </Tr>
          </Thead>
          <Tbody>
            {todos.map((todo) => (
              <Tr key={todo.id}>
                <td> {todo.title}</td>
                <td>{todo.done ? "true" : "false"}</td>
                <td>{todo.created.toISOString()}</td>
              </Tr>
            )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default App
