import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from './components/Footer/Footer';
import Main from "./components/main/Main";
import MainRoute from './components/MainRoutes/MainRoute';
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className='appMain'>

      <MainRoute/>
      <Footer/> 
    </div>
  );
}

export default App;
