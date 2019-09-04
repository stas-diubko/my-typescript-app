import React from 'react';
import SimpleTabs from './adminTabs';
import { AdminState } from '../../redux/admin/types';

export interface AdminProps {
  getUsers: () => object;
  books: any;
  users: any;
}

export class AdminComponent extends React.Component<AdminProps, AdminState>  {
    state: AdminState = {
      books: '',
      users: []  
  }

  componentDidMount () {
    const { getUsers } = this.props;
    getUsers() 
    // console.log('test')
  }


  render () {

    return (
      <div>
        <SimpleTabs/>
      </div>
    )
  }
}

export default AdminComponent;
