import React, { Component } from 'react'
import RatingStar from './Components/RatingStar/RatingStar'
import ReactDOM from 'react-dom'
class App extends Component {
  render() {
    return(
      <div>
        <RatingStar unit={'分数'}></RatingStar>
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
export default App;
