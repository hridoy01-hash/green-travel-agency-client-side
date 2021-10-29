import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Booking from './Pages/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import MyBooking from './Pages/MyBooking/MyBooking';
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
         <Route path="/home">
              <Home></Home>
         </Route>
         <Route exact path="/booking/:id">
              <Booking></Booking>
         </Route>
         <Route path="/managebooking">
           <ManageBooking></ManageBooking>
         </Route>
         <Route path="/mybooking">
           <MyBooking></MyBooking>
         </Route>
         <Route path="/addservice">
           <AddService></AddService>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>

       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
