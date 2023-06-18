import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component() {
  //constructor() {
    state = {
      value: 1
    }
    componentDidMount() {
      console.log("Mounted")
      this.setState((prevState) => {
        return { value: prevState.value + 1 }
      })
      this.setState((prevState) => {
        return { value: prevState.value + 1 }
      })
    }

    render() {
      console.log("Rendered")
      return (
        <div>
          Hi
          <div />
      );
    }

  //</div>}
}

          export default App;
