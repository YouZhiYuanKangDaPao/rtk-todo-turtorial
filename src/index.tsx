import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
// import App from './app/App';
import store from "./app/store";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const App = require('./app/App').default
// root.render(
//   <React.StrictMode>
//       <Provider store={store}>
//           <App />
//       </Provider>
//   </React.StrictMode>
// );

function render() {
    const App = require('./app/App').default
    root.render(
        <Provider store={store}>
            <App />
        </Provider>,
        // document.getElementById('root')
    )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app/App', render)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
