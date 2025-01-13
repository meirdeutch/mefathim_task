import './App.css';
import RouterApp from './RouterApp';
import { BrowserRouter } from 'react-router-dom';
import Logout from './components/logout/Logout';
import { Provider } from 'react-redux';
import store from './redux/loginStatus/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Logout />
        <RouterApp />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
