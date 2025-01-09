import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home'
import Contact from './components/Pages/Contact/Contact';
import ViewData from './components/Pages/ViewData/ViewData';
import NotFoundPage from './components/Pages/NotFound/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/view-data" element={<ViewData />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
