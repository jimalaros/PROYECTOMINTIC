import React from 'react';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

const Template2 = ({children}) => {
   return (
      <div>
         <Navbar/>
         <Sidebar/>
         <main className='w-100px'>{children}</main>
         <Footer/>
      </div>
   );
};

export default Template2;