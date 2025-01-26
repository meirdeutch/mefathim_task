import './App.css';
import RouterApp from './RouterApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/loginStatus/store';
import { ToastContainer} from 'react-toastify';
import Logout from './components/logout/Logout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Logout />
        <RouterApp />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
