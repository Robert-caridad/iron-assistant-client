import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout';

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Layout>
        <AppRoutes />
      </Layout>
    </MantineProvider>
  )
}
export default App
