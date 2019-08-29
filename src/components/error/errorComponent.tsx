import React, { Dispatch } from "react";

import './errorComponent.css';

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

// const mapStateToProps = (state: RootState) => ({
//   error: state.error
// });

// const mapDispatchToProps: any = (dispatch: any) => ({
//   actions: bindActionCreators(onErrorOccured, dispatch)
// });

// export const Error = connect(mapStateToProps)(ErrorComponent);

export default ErrorComponent;
