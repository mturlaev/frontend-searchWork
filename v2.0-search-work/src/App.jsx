import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from './components/Footer/Footer';
import MainRoute from './components/MainRoutes/MainRoute';

function App() {
  return (
    <div className='appMain'>

      <MainRoute/>
      <Footer/> 
    </div>
  );
}

export default App;
