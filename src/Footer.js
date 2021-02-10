import React from 'react';
import './Footer.css';


export class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state={color: 'white'};    
    this.changeColor=this.changeColor.bind(this);
  }
  changeColor(event){
    event.preventDefault();
    this.setState({color: 'Green'});
    console.log("this is a icon");
  }
  render(){
    return(
      <footer>
        <div className="ng">
        <div className="list">
          <ul className="text-right">
            <li><a href="AboutUs" className="items">درباره ما</a></li>
            <li><a href="Rules" className="items">قوانین ومقررات</a></li>
          </ul>
          <ul className="text-justify">
            <li><a href="Help" className="items">راهنما</a></li>
          </ul>
        </div>
        <div className="icon-primary" >
          <a href="mailto:info@topreaders.net" target="_blank" style={{ color: this.state.color }} onClick={this.changeColor}><img src="http://37.228.138.173/assets/images/mail-2.svg" alt="mail"/></a>
          <a href="https://t.me/topreaders" target="_blank" style={{ color: this.state.color }} onClick={this.changeColor}><img src="http://37.228.138.173/assets/images/telegram-2.svg" alt="تلگرام"/></a>
          <a href="https://www.instagram.com/topreaders_kid" target="_blank" style={{ color: this.state.color }} onClick={this.changeColor}><img src="http://37.228.138.173/assets/images/instagram-2.svg" alt="اینستاگرام"/></a>
        </div>
        <div className="logos">
        <div className="logo-img"><img src="http://37.228.138.173/assets/icon/BehKetab/Logo.svg" alt="logo"/></div>
        <div className="namad"><img src="http://37.228.138.173/assets/images/electric-trust.svg" alt="namad"/><span>نماداعتمادالکترونیک</span></div>
        </div>
        </div>
        <div className="copyright"><p> تمام حقوق مادی و معنوی این سایت متعلق به <small>تاپ ریدرز//</small> می باشد.</p></div>
      </footer>
    );
  }}
export default Footer;