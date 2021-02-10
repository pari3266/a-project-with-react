import React from 'react';
// import { Redirect } from 'react-router';
import './HeaderSignIn.css';
// import Header from './Header';
export class HeaderSignIn extends React.Component {
      
      // constructor(props){
      //   super(props);
      //   this.profile=this.profile.bind(this);
      // }
      // profile(){
      //     return (
             
      //     );
          // return (<Header/>);
        // this.setState({redirect: true});

      // }
        render(){
            // if (this.state.redirect) {
            //     return <Redirect push to="./Header.js" />;
            //   }
          return(
            <header>
              <div className="logo"><img src="http://37.228.138.173/assets/icon/BehKetab/Logo.svg" alt="logo" /></div>
              <div className="nav">
              <nav>
                <ul>
                  <li>کتاب‌ها</li>
                  <li>کتابخانه من</li>
                  <li>گروه‌ها</li>
                </ul>
              </nav>
              </div>
              <div className="search">
                  <form autocomplete="off">
                    <input type="text"  placeholder="جستجو در بین بیش از 5 هزار جلد کتاب"/>
                  </form>
              </div>
                <div className="signIn">
                    <button>ثبت نام یا ورود</button>
                </div>
              
            </header>
          );
        }
      }
    export default HeaderSignIn;
    