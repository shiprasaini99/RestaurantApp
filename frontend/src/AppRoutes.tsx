import { Navigate, Route, Routes } from 'react-router-dom'
import { to } from './../node_modules/@types/node/vm.d';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<span>Home Page</span>} />
        <Route path="/about" element={<span>About US</span>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  )
}

export default AppRoutes
