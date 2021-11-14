// import 'antd/dist/antd.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HeaderComponent from './components/HeaderComponent';
import CustomFriendListComponent from './components/CustomFriendListComponent';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderComponent />
        <CustomFriendListComponent />
      </div>
    </Provider>
  );
}

export default App;
