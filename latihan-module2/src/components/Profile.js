import React from 'react';
import MyBio from './MyStyle';
// import ClickMe from './ClickMe';

export default function Profile () {
    const myData = {
        name: 'Febry D F',
        age: 90,
      };

      const ClickMe = ({children, onClickbtn }) =>{
        return (
        <button type='button' onClick={() => onClickbtn }>
        {children} 
        </button>
        );
    };
      
      const HandlerHitme = () =>{
        alert("Anda telah mengetuk saya");
        console.log("Anda telah mengetuk saya")
      }
            
    return (
        <div>
          <MyBio {...myData} />  
          <ClickMe onClickBtn={HandlerHitme}>
             Klik Saya!
          </ClickMe>
          <button type='button' onClick={HandlerHitme }>
    kliks
    </button>
        </div>
    );
}