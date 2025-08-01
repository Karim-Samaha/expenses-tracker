import { Component, ErrorInfo, ReactNode } from "react";
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // console.error('ErrorBoundary caught an error', error, errorInfo);
    // Optionally log error to an external service here
  }

  handleReset = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="text-center flex flex-col items-center justify-center mt-[150px]">
          <h1 className="text-red-600 text-lg font-medium mb-2">Error</h1>
          <h2 className="text-gray-900 text-2xl font-semibold mb-4">
            {" "}
            Oops! Something went wrong.
          </h2>
          <p className="text-gray-600 mb-6">
            You can{" "}
            <button
              className="text-blue-500 hover:underline font-bold"
              onClick={this.handleReset}
            >
              Restart The App
            </button>
            .
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
