import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import '../admin/adminComponent.css';
import { UsersTableState } from "../../redux/usersTable/types";
import LoaderCircular from '../../containers/loaderCircularContainer'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export interface TableUsersProps {
  deleteUser: (data:any) => any;
  getUsers: (data:any) => object;
  usersLength: any;
  users: any;
}

export class TableUsersComponent extends React.Component<TableUsersProps, UsersTableState> {
    state: UsersTableState = {
      users: '',
      usersLength: '',
  }

  onDeleteUser = (e:any) => {
    const {deleteUser} = this.props;    
    deleteUser(e.currentTarget.id)
  }

  // paging

  counter:any = 0;
  onNextPage = (e:any) => {
    this.counter++
    if (this.props.usersLength % 2 == 0) {
      if(this.counter == Math.floor(this.props.usersLength/2)){
        this.counter--
      }
    }
    if (this.props.usersLength % 2 == 1) {
      if(this.counter == Math.floor(this.props.usersLength/2)+1){
        this.counter--
      }
    }
    const { getUsers } = this.props;
    getUsers(this.counter); 
  }
  
  onPreviousPage = (e:any) => {
    this.counter--
    if (this.counter < 0 ) {
      this.counter = 0
    }
    const { getUsers } = this.props;
    getUsers(this.counter); 
  }
  
      render () {
          let users = this.props.users;
          if(this.props.users == undefined) {
            users = []
          }
          const items = users.map((user:any) => <TableRow className="user-row" key={user.id}>
            <TableCell >
              {user.name} 
            </TableCell>
            <TableCell >
              {user.email}
            </TableCell>
            <TableCell  className="delete">
              <DeleteIcon  id={user.id} key={user.id}  style={{marginLeft: "80%"}}
                onClick={(e:any)=>this.onDeleteUser(e)}>
              </DeleteIcon>
            </TableCell>
        </TableRow>);
     
        return (
          <div style={{display:"reletive"}}>
            <LoaderCircular/>
            <Paper >
                <Table>
                <TableHead>
                    <TableRow id="tbl-head">
                      <TableCell>User Name</TableCell>
                      <TableCell>User Email</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>  
                    {items}
                  </TableBody>
                </Table>     
                  <div style={{padding:"5px"}}><ArrowDropDownIcon onClick={(e:any)=>this.onNextPage(e)}/><ArrowDropUpIcon onClick={(e:any)=>this.onPreviousPage(e)}/></div>  
            </Paper> 
          </div>
        );
      }
}

export default TableUsersComponent;