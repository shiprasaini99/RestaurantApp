import { Navigate, Route, Routes } from 'react-router-dom'
// import { to } from './../node_modules/@types/node/vm.d';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout><HomePage/></Layout>} />
        <Route path="/about" element={<span>About US</span>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}

export default AppRoutes
