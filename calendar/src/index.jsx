import React from 'react'
<<<<<<< HEAD
import ReactDOM from 'react-dom'
import Calendar from './components/calendar';

function App() {
    return <Calendar/>
}
const rootElement = document.getElementById("root");
ReactDOM.render (<App/>, rootElement);
=======
import { render } from 'react-dom';
import StorePicker from './components/storepicker'
import Router from "./components/Router";
render(<StorePicker />, document.querySelector('#root'))
<<<<<<< HEAD
>>>>>>> parent of 66bf9c0 (trying to get working calendar)
=======
>>>>>>> parent of 66bf9c0 (trying to get working calendar)
