// mostly code from React docs
import React from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error Boundary caught and error:', error, info); // eslint-disable-line
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing <Link to="/">Click here</Link> to
          go back to the homepage
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
