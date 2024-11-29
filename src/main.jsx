import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx'; // Đảm bảo rằng đường dẫn này đúng
ReactDOM.createRoot(document.getElementById("root")).render(

 <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
 
 
);
