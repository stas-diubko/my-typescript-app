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

export interface TableUsersProps {
  deleteUser: (data:any) => any;
  users: any;
}

export class TableUsersComponent extends React.Component<TableUsersProps, UsersTableState> {
    state: UsersTableState = {
      users: ''   
  }

  isResizeble = false;

  onDeleteUser = (e:any) => {
    const {deleteUser} = this.props;    
    deleteUser(e.currentTarget.id)
    // console.log(e.currentTarget.id);
    
  }
  
      render () {
                      
          const items = this.props.users.map((user:any) => <TableRow className="user-row" key={user.id}>
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
            </Paper> 
          </div>
        );
      }
}

export default TableUsersComponent;