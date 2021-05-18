import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Data from './data.json';
import ModalView from './Components/ModalView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: Data,
      show: false,
      selected: {},
    };
  }
  showBeast = (event) => {
    console.log(event);
    this.setState({
      show: true,
      selected: event,
    })
  }
  closeModal = () => {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Main
          showBeast={this.showBeast}
        />
        {(this.state.show) ?
          <ModalView
            selected={this.state.selected}
            show={this.state.show} close={this.closeModal}
          /> : null}
        <Footer />
      </div>
    )
  };
}

export default App;