import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { RouterProvider } from 'react-router-dom';
import router from './router.jsx'; // Đảm bảo rằng đường dẫn này đúng
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="270225925118-kc36r38s9176nsrnjhdi5vuq0p1iirg6.apps.googleusercontent.com">
<Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
  </GoogleOAuthProvider>
 
 
 
);
