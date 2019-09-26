import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      this.loader = <div 
      style={{
          display: "flex", 
          justifyContent: "center", 
          width:"100%", 
          height:"200px", 
          alignItems: "center", 
          position:"absolute"}}
      ><div><CircularProgress /></div> </div>
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