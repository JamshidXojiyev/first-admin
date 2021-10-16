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
    const google = `https://google.com/search?q=${error.message} reactjs error`;
    const stackoverflow = `https://stackoverflow.com/search?q=${error.message} reactjs error`;
    window.open(stackoverflow);
    window.open(google);
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
