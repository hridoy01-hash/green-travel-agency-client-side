import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';

import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import MyBooking from './Pages/MyBooking/MyBooking';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {

  return (
    <div>
      <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
              <Home></Home>
         </Route>
         <Route exact path="/home">
              <Home></Home>
         </Route>
         <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
         </PrivateRoute>
         <PrivateRoute path="/managebooking">
           <ManageBooking></ManageBooking>
         </PrivateRoute>
         <PrivateRoute path="/mybooking">
           <MyBooking></MyBooking>
         </PrivateRoute>
         <PrivateRoute path="/addservice">
           <AddService></AddService>
         </PrivateRoute>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         
         <Route path="*">
           <NotFound></NotFound>
         </Route>

       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
