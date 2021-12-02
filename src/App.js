import { lazy, Suspense, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import { authOperations, authSelectors } from "./redux/auth";
import { Route,Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Loader from "./components/Loader/Loader";
import ContainerHeader from "./components/Container/ContainerHeader";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationError, NotificationSuccess } from "./components/Notification/Notification";
  
const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const notification = useSelector(authSelectors.getIsNotification);
  
  useEffect(() => {
    const { status, message } = notification;

    switch (status) {
      case 'error':
        return NotificationError(message);
      case 'success':
        return NotificationSuccess(message);
    
      default:
        return;
    };
  },[notification]);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
 
  return (
    
    !isFetchingCurrentUser && (
       <>
      <ContainerHeader>
        <AppBar />
      </ContainerHeader >
      <Suspense fallback={<Loader/>}>
        
          <Routes>
            <Route path="/" element={
              <PublicRoute >
              <HomePage />
            </PublicRoute>} />
            
            <Route path="/register" element={
              <PublicRoute restricted  redirectTo='/'>
                <RegisterPage />
              </PublicRoute>} />
            
            <Route path="/login" element={
              <PublicRoute restricted redirectTo='/contacts'>
                <LoginPage />
                </PublicRoute>} />
              
           
            <Route path="/contacts" element={
                <PrivateRoute >         
                <ContactsPage />            
              </PrivateRoute>} />           
          </Routes>  
       <ToastContainer />
      </Suspense>
    </>
   )
  );
};

export default App;

