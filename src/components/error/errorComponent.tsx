import React from "react";
import './errorComponent.css';

export interface ErrorProps {
  error?: any;
}

export class ErrorComponent extends React.Component<ErrorProps> {
  render() {
    return <div className="error-wrap">
      {this.props.error}
    </div>;
  }
}

export default ErrorComponent;
