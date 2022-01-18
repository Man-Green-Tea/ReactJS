import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FunctionMessage (props) {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
}

class NewComponent extends React.Component {
  render() {
    const message = "Hello React";
    return(
    <FunctionMessage message={message} />
    );
  }
}



ReactDOM.render(
  <React.StrictMode>
    <NewComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
