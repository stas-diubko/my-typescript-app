import React from 'react';
import SimpleTabs from './adminTabs';
import { AdminState } from '../../redux/admin/types';
import { Redirect } from 'react-router';


export interface AdminProps {
  getUsers: () => object;
  getId: () => object;
  // getBooks: () => Object;
  books: any;
  users: any;
  isAdmin: boolean;
  
}

export class AdminComponent extends React.Component<AdminProps, AdminState>  {
    state: AdminState = {
      books: '',
      users: [],
      isAdmin: false,
  }

  isAdminStr:any = localStorage.getItem('isAdmin');
  isAdmin:boolean = JSON.parse(this.isAdminStr);

  componentDidMount () {
    const { getUsers } = this.props;
    getUsers() 
    const { getId } = this.props;
    getId()
    

    // if (this.props.isAdmin){
    //     this.setState({isAdmin: this.props.isAdmin}) 
    //   // console.log(this.state.isAdmin)
    // } 
    // else {
    //     this.setState({isAdmin: false}) 

    // }
    // console.log(this.props.isAdmin)
    


  }


  render () {
  //   if (this.props.isAdmin){
  //     this.setState({isAdmin: this.props.isAdmin}) 
  //   console.log(this.state.isAdmin)
  // } 
  // console.log(this.props.isAdmin)

    if(this.props.isAdmin === false) {
      return <Redirect to="/home"/>
      // document.location.href = 'http://localhost:3001/home';    
    } 
    // console.log(this.props.isAdmin)
    return (
      <div>
        <SimpleTabs/>
      </div>
    )
  }
}

export default AdminComponent;
