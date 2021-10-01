import React from 'react';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import Footer from 'components/Footer';


const Template3 = ({children}) => {
   return (
   <div>
      <Navbar/>
      <Header/>
      <main >{children}</main>
      <Footer/>
   </div>
   );
};

export default Template3;
