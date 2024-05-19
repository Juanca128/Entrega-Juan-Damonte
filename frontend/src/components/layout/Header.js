import React from 'react';
import '../../styles/layout/Header.css';

const Header = (props) =>{
    

    return(
        
        <div className = "heading"> 
          <div className = "header-pic">
              <img src={'logo_redondo.png'} className="App-logo" alt="logo" />
          </div>
           <div className = "cabecera">      
              Luna Violácea
           </div>    
        </div>
    );
}

export default Header;
