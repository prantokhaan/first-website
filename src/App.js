import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Doctors from './components/Doctors/Doctors'
import Packages from './components/Packages/Packages';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import DoctorDetail from './components/DoctorDetail/DoctorDetail';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './../src/Context/AuthProvider'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Appointment from './components/Appointment/Appointment';
import Profile from './components/Profile/Profile';

function App() {
  
  
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <PrivateRoute path="/doctor/:doctorId">
            <DoctorDetail />
          </PrivateRoute>
          <PrivateRoute path="/plans">
            <Packages />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
