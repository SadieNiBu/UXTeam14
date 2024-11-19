import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';
import reportWebVitals from './reportWebVitals';
import "./styles.css"
import { HashRouter } from 'react-router-dom';
import { EventContextProvider } from './context/EventContext';
import { MemberContextProvider } from './context/MemberContext';
import { PhotoContextProvider } from './context/PhotoContext';
import { SemesterContextProvider } from './context/SemesterContext';
import { ArticleContextProvider } from './context/ArticleContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HashRouter>
        <EventContextProvider>
        <MemberContextProvider>
        <PhotoContextProvider>
        <SemesterContextProvider>
        <ArticleContextProvider>
          <ScrollToTop />
          <App />
        </ArticleContextProvider>
        </SemesterContextProvider>
        </PhotoContextProvider>
        </MemberContextProvider>
        </EventContextProvider>
      </HashRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
