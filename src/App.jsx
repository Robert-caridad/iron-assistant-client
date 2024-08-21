import './App.css'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AppRoutes />
    </MantineProvider>
  )
}
export default App
