import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Form from '../Components/Form'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form genericPropsForm={dictForGenericPropsUser} />
  </React.StrictMode>
);


reportWebVitals();
