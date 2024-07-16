import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AboutPage, ContactPage, FashionPage, HomePage, NewsPage, ProductPage } from './components/index.js';
import DetailProduct from './components/DetailProduct.jsx';
import { Provider } from 'react-redux'
import { store } from './store/store.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : "/",
        element  : <HomePage/>
      } ,
      { path : "/about",
        element : <AboutPage/>
      } ,
      { path : "/product",
        element : <ProductPage/>
      } ,
      { path : "/fashion",
        element : <FashionPage/>
      } ,
      { path : "/new",
        element : <NewsPage/>
      } ,
      { path : "/contact",
        element : <ContactPage/>
      },
      { path : "/detail/:id",
        element : <DetailProduct/>
      }
    ]
      
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
     <RouterProvider router={router} />
   </Provider>
   
  
);
  

