import { lazy, Suspense, } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import UserContext from './context/user';
import AuthListener from './hooks/use-auth-listener';
import './styles/app.css'
import ProtectedRoute from './helpers/protected-route';
import ReactLoader from './components/Loader';
import IsUserLoggedIn from './helpers/is-user-logged-in';


const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/Signup'));
const Profile = lazy(() => import('./pages/Profile'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  const { user } = AuthListener();


  return (
    <UserContext.Provider value={{ user }}>
      <Router>
      <Suspense fallback={<ReactLoader />}>
          <Switch>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
            <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}>
            <SignUp/>
            </IsUserLoggedIn>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
          </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
