
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './page/Home/Home';
import LoginPage from './page/LoginPage/LoginPage';
import UserPage from './page/UserPage/UserPage';

import { AuthProvider } from './contexts/Auth';
import ErrorPage from './_utils/ErrorPage';
import PublicRouter from './page/Public/PublicRouter';
import AdminRouter from './page/Admin/AdminRouter';
import AuthRouter from './page/Auth/AuthRouter';
// import { useAuth } from '../../contexts/Auth';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  // const { authEmail,
  //   setAuthEmail,
  //   isLoggedIn,
  //   setIsLoggedIn } = useAuth();
  return (
    <div>

      <AuthProvider>
        <Routes>
          {/* <Route path='/' element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            < Route path='/user' element={<UserPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route> */}
          <Route path='/*' element={<PublicRouter />} />
          <Route path='/admin/*' element={


            <AdminRouter />

          } />
          <Route path='/auth/*' element={<AuthRouter />} />

        </Routes>

      </AuthProvider>
    </div>
  );
}

export default App;
