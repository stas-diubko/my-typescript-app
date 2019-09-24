import React from 'react';
import SimpleTabs from './adminTabs';
import { AdminState } from '../../redux/admin/types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import  jwt_decode from 'jwt-decode';


export interface AdminProps {
  getUsers: () => object;
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
    getUsers(); 
  }

  render () {
    let dataUserToken:any = localStorage.getItem('token')
    let decoded:any;
    if (dataUserToken === null) {
      decoded = null;
    } else {
      decoded = jwt_decode(dataUserToken);
    }

    if( decoded === null || !decoded.isAdmin) {
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
        <SimpleTabs/>
      </div>
    )
  }
}

export default AdminComponent;
