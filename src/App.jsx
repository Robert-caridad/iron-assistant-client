import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Navigation from './components/Navigation/Navigation';


function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <Navigation />
    </MantineProvider>
  )
}

export default App
