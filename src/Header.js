import React from 'react';
import './Header.css';


export class Input extends React.Component{
    constructor(props){
    super(props);
    this.state={input : ''};
    this.handleInputChange=this.handleInputChange.bind(this);
  }
  handleInputChange(e){
    this.setState({input: e.target.value,});
    console.log(this.input);
  }
  render() {
    return (
      <div className="search">
      <form autocomplete="off">
         <input type="text" value={this.state.input} onChange={this.handleInputChange} placeholder="جستجو در بین بیش از 5 هزار جلد کتاب"/>
      </form>
      </div>
    );
  }
}

export class Notification extends React.Component{
  constructor(props){
    super(props);
    this.state={ counter:0 };
    this.handleClick=this.handleClick.bind(this);
    console.log(this.counter);
  }
  handleClick(){
    this.setState({ counter: this.state.counter + 1 })
    console.log(this.counter);}
    render(){
      return(
        <div className="butns">
          <button className="notif" onClick={this.handleClick}><img src="http://37.228.138.173/assets/icon/notification-bell.svg" alt="notif"/></button>
        </div>
      );
    }
}

export class Header extends React.Component {

  constructor(props){
    super(props);
    this.state={message: 'messages'};
    this.showMessages=this.showMessages.bind(this);
  }
  showMessages(){
    alert(this.state.message);
  }
  
    render(){
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
          <Input/>
          <Notification/>
          <div className="butns">
          <button className="msg" onClick={this.showMessages}><img src="http://37.228.138.173/assets/icon/message-icon.svg" alt="msg"/></button>
          
          <div className="dropdown">
            <button className="pro"><img src="http://37.228.138.173/assets/images/1/6.jpg" alt="prof"/></button>
            <div className="dropdown-content">
                <a href="#pro">پروفایل</a>
                <a href="#exit">خروج</a>
            </div>
            </div>
          </div>
        </header>
      );
    }
  }
export default Header;
