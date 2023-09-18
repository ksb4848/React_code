import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const arrlistData = [];

// const allData = () => {
//   arrlistData.sort((a,b) => parseInt(a.starttime)-parseInt(b.starttime))
// }


function reducer(state = arrlistData, action) {
  switch (action.type) {
    case 'TODO_REGIST':
      state.push(action.payload);
      return state.sort((a,b) => parseInt(a.starttime)-parseInt(b.starttime))
      // [...state, 
        // {
        //   id: number,
        //   title: action.payload.title,
        //   tag: action.payload.tag,
        //   textarea: action.payload.textarea,
        //   starttime: action.payload.starttime,
        //   endtime: action.payload.endtime,

        // }]

      
    case 'check':
      // 보류
      state[action.idx].hidden = action.payload;
      break;
    case 'TODO_UPDATE':
      let copy = state.map((result, index) => index === action.index ? (Object.assign(result, action.value)) : result)
      return copy
    case 'TODO_DELETE':
      return state.filter((deletedList, number) => number !== action.index)
    default:
      return state;
  }
  state.sort((a,b) => parseInt(a.starttime)-parseInt(b.starttime))
  return state;

}

  
let store = createStore(reducer);
  
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
