import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PageHeader from './components/header/headerView';
import PetDetailsPage from './pages/home/petDetailsPage';
import ErrorModalView from './components/errorModal/errorModalView';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageHeader />
        <PetDetailsPage />
        <ErrorModalView />
      </div>
    </Provider>
  );
}

export default App;
