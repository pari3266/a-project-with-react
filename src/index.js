import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HeaderSignIn from './HeaderSignIn';
import Main from './Main';
import Footer from './Footer';
// import Header from './Header';
import AddDocumentComponent from './LocalStorage';
class Page extends React.Component {
  render(){
    return(
      
      <div id="root">
      <AddDocumentComponent/>
      <Main />
      <Footer />
      </div>
    );
  }
}
export default Page;
ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
