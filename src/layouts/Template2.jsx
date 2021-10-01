import React from 'react'
import Sidebar from 'components/Sidebar';

const Template2 = ({children}) => {
   return (
      <div>
         <Sidebar/>
         {children}
      </div>
   )
}

export default Template2;
