import React from "react";
import './error.component.css';

export interface ErrorProps {
  error?: string;
}

export class ErrorComponent extends React.Component<ErrorProps> {
  render() {
    return <div className="error-wrap">
      {this.props.error}
    </div>;
  }
}

export default ErrorComponent;
