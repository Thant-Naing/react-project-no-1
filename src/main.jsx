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
      { path : "/home/about",
        element : <AboutPage/>
      } ,
      { path : "/home/product",
        element : <ProductPage/>
      } ,
      { path : "/home/fashion",
        element : <FashionPage/>
      } ,
      { path : "/home/new",
        element : <NewsPage/>
      } ,
      { path : "/home/contact",
        element : <ContactPage/>
      },
      { path : "/home/detail/:id",
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
  

