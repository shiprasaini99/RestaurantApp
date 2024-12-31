import { Navigate, Route, Routes } from 'react-router-dom'
import { to } from './../node_modules/@types/node/vm.d';
import Layout from './layouts/layout';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout>Home Page</Layout>} />
        <Route path="/about" element={<span>About US</span>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
