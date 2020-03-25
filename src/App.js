import React from 'react';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store';
import PageHeader from './components/header/headerView';
import PetDetailsPage from './pages/home/petDetailsPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageHeader />
        <PetDetailsPage />
      </div>
    </Provider>
  );
}

export default App;
