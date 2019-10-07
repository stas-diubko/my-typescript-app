import React from 'react';
import SimpleTabs from './admin.tabs';
import { AdminState } from '../../redux/admin/types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import  jwt_decode from 'jwt-decode';

export interface AdminProps {
  getUsers: (data:number) => object;
  books: object;
  users: object; 
  isAdmin: boolean;
}

export class AdminComponent extends React.Component<AdminProps, AdminState>  {
    state: AdminState = {
      books: [],
      users: [],
      isAdmin: false,
      usersLength: 0
  }

  isAdminStr:any = localStorage.getItem('isAdmin');
  isAdmin:boolean = JSON.parse(this.isAdminStr);

  componentDidMount () {
    let data = 0
    const { getUsers } = this.props;
    getUsers(data); 
  }

  render () {
    let dataUserToken:any = localStorage.getItem('token')
    let decoded:any;
    if (dataUserToken === null) {
      decoded = null;
    } else {
      decoded = jwt_decode(dataUserToken);
    }

    if( decoded === null || decoded.role !== "admin") {
        return <Redirect to="/home"/>
    } 
    
    return (
      <div>
        <div className="home-header">
          <div style={{display: "flex"}}>
            <h2>Admin Page</h2>
            <Link style={{margin: "22px 0 0 20px "}} to="/home">To Home Page</Link>
          </div>
        </div>
        <h3 style={{marginLeft: "20px", color: "brown", fontSize: "24px"}}>Shop Data</h3>
        <div style={{margin: "0 20px"}}>
           <SimpleTabs/>
        </div>
       
      </div>
    )
  }
}

export default AdminComponent;

