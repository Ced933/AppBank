
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import UserPage from './components/UserPage/UserPage';

import { AuthProvider } from './contexts/Auth';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <div>
      <AuthProvider>

        <Routes>
          <Route path='/' element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            < Route path='/user' element={<UserPage />} />
          </Route>
        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
