import './App.css';
import { Route, Routes } from 'react-router-dom';
import PublicRouter from './page/Public/PublicRouter';
import AdminRouter from './page/Admin/AdminRouter';
import AuthRouter from './page/Auth/AuthRouter';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/*' element={<PublicRouter />} />
        <Route path='/admin/*' element={<AdminRouter />} />
        <Route path='/auth/*' element={<AuthRouter />} />
      </Routes>
    </div>
  );
}

export default App;
