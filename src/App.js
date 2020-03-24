import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store';
import CatDetailsPage from './pages/home/catDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CatDetailsPage />
      </div>
    </Provider>
  );
}

export default App;
