import React from 'react';
import { errorStyle } from './style';

interface ErrorBoundaryProps {
  resetRef: React.MutableRefObject<(() => void) | undefined>;
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = { error: undefined };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props.resetRef.current = this.setState.bind(this, this.state);
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <pre style={errorStyle}>{String(this.state.error)}</pre>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
