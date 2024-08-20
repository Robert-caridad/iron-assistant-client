import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';


function App() {

  return (
    <MantineProvider>
      <Navigation />
      <AppRoutes />
      <Footer />
    </MantineProvider>
  )
}

export default App
