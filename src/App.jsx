import './App.css';
import Container from './components/Container';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from 'react-loader-spinner';

const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const Contacts = lazy(() => import('./components/Contacts'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      {!isFetchingCurrentUser && (
        <Container>
          <AppBar />
          <Switch>
            <Suspense fallback={<Loader type="Circles" color="lightblue" />}>
              <PublicRoute
                path="/login"
                exact
                restricted
                redirectTo="/contacts"
              >
                <LoginView />
              </PublicRoute>
              <PublicRoute
                path="/registration"
                exat
                restricted
                redirectTo="/contacts"
              >
                <RegisterView />
              </PublicRoute>

              <PrivateRoute path="/contacts" exact redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </Container>
      )}
    </div>
  );
}

export default App;
