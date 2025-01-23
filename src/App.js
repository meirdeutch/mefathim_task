import './App.css';
import RouterApp from './RouterApp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/loginStatus/store';
import { ToastContainer} from 'react-toastify';
import LogoutAndLoginAgain from './components/logoutAndLoginAgain/LogoutAndLoginAgain';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LogoutAndLoginAgain />
        <RouterApp />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
