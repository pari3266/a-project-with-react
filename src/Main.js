import React from 'react';
import './Main.css';
export class Main extends React.Component {
    render(){
      return(
        <main className="style">
        <img src="http://37.228.138.173/assets/images/baner.png" alt="baner" className="baner"/>
        <div className="box" fxLayoutAlign="start center">
          <div className="SiteTitle">
          <img src="http://37.228.138.173/assets/icon/BehKetab/Sign.svg" alt="sign"/>
          <h1 className="h1">تاپ ریدرز</h1>
          </div>
          <div className="h2"><h2>شبکه‌اجتماعی معرفی کتاب</h2></div>
         </div>
          </main>
      );
    }}
export default Main;