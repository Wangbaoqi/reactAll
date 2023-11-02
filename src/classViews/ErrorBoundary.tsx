import { Component, ErrorInfo } from 'react'

interface ErrorState {
  hasError: boolean
}

interface ErrorProps {
  children: React.ReactNode
}

export default class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  state: ErrorState = {
    hasError: false
  }
  // constructor() {
  // }

  static getDerivedStateFromError(error: any): ErrorState {
    console.log(error, 'error boundary')

    return {
      hasError: true
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo)
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Something went wrong.</h1>
        ) : (
          this.props.children
        )}
      </div>
    )
  }
}
