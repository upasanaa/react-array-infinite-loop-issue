import React, {Component}  from 'react';
import ReactDOM from 'react-dom';


export default class App extends Component {

render() {

    const arr = [
        1100: "1100 is the number",
        1101: "1101 is the number",
        1102: "1102 is the number",
        1103: "1103 is the number",
        1104: "1104 is the number",
        1105: "1105 is the number",
        ];

    const list = arr;
    const timeList = list.map((element, idx) =>
        <li key={idx}>{element}</li>
        );


    return (
      <div className="App" >
        {timeList}
      </div>
    );
 }
}
