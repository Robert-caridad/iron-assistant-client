import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      {/* <HomePage /> */}
      <Navigation />
      <Footer />
    </MantineProvider>
  )
}

export default App
