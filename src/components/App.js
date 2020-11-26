import React from 'react';
import '../assets/css/App.css';
import OrderSum from './OrderSum';
import OrderManagement from './OrderManagement';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showOrderManagement : false
    }
  }

  changeRender = () => {
    this.setState({
      showOrderManagement: true
    });
  }

  render() {
    const { showOrderManagement } = this.state;
    return (
        <React.Fragment>
          {!showOrderManagement && <OrderSum changeRender = {this.changeRender}/>}
          {showOrderManagement && <OrderManagement/>}    
        </React.Fragment>
    );
  }
}

export default App;
