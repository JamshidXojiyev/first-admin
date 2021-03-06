import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    const google = `https://google.com/search?q=${error.message}`;
    const stackoverflow = `https://stackoverflow.com/search?q=${error.message}`;
    const gW = new Window();
    const sW = new Window();
    gW.open(google);
    sW.open(stackoverflow);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

