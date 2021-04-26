import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './compentents/Main';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main/>
        <Footer />
      </div>
    )
  };
}

export default App;