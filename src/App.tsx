import { Button } from '@chakra-ui/react'
import './App.css'

function App() {
  console.log(process.env.VITE_SUPABASE_URL)
  return (
    <><Button colorScheme='teal'>Button</Button>
    </>
  )
}

export default App
