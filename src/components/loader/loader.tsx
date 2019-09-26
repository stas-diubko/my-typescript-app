import React from 'react';
import LinearDeterminate from './linear';

export interface LoaderProps {
  isLoader: boolean;
}

export class Loader extends React.Component<LoaderProps, any> {

  state = {
    isLoader: true
  }

  loader:any
  render () {
    if (this.props.isLoader) {
      this.loader = <LinearDeterminate/>
    } else {
      this.loader = <div></div>
    }

    return (
      <div >
        {this.loader}
      </div>
    )
  }
}

export default Loader; 