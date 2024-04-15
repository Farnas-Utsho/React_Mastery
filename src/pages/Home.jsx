import React from 'react'
import "./Home.css";
import Contact from './Contact';


const str="Lets go to school ";
const sum =100+100
function Home() {
    return (
        <div className='Home'>
          <Contact name="Alpha" number="0125464644564"/>
          <Contact name="BRavo" number="0125464644564"/>
          <Contact name="Charlie" number="0125464644564"/>
          <Contact name="Delta" number="0125464644564"/>
          
        </div>
    )
}

export default Home

