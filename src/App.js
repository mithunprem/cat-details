import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store';
import PetDetailsPage from './pages/home/petDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PetDetailsPage />
      </div>
    </Provider>
  );
}

export default App;
