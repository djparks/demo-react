import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App.jsx';

// TODO DJP StrictMode is new... will cause lots of warnings...

const rootEl = document.getElementById('app');

    /*
      Not a big deal, but this causes smoother instant re-render w/o flash.
     */
    function render() {
        ReactDOM.render(<App />, rootEl);
    }

  if (module.hot) {
      module.hot.accept('./app/layout/App.jsx', function () {
          setTimeout(render);
      })
  }

  render();
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    rootEl
  /!*document.getElementById('root')*!/
);
*/

