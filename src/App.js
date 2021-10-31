import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import AddService from './components/Add Service/AddService';
import Booking from './components/Booking/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import ManageOrder from './components/ManageOrder/ManageOrder';
import Carts from './components/Carts/Carts';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/carts'>
              <Carts></Carts>
            </PrivateRoute>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/manageOrder'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/addservice'>
              <AddService></AddService>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
