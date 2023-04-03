/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import './i18n';
import { ROUTES } from './constant/ROUTES';
import store from './store';
import Header from './components/Header';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          {/* <Route path='*' element={<NotFoundContainer />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

const ConnectedApp = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>
);

export default ConnectedApp;
