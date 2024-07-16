import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Layout, NavBar, SecNavBArPage } from "./components";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {
  Sheet,
} from "./components/ui/sheet.jsx"
import ShoppingCard from "./components/ShoppingCard.jsx";

const App = () => {
  const location = useLocation();
  return (
    <>
    <Sheet>
      <Layout>
        <NavBar />
      </Layout>
        <SecNavBArPage/>
        

      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
           <div>
            <Outlet />
           </div>
            
          
        </CSSTransition>
      </SwitchTransition>
      
      <ShoppingCard/>
      </Sheet>
    </>
  );
};

export default App;
