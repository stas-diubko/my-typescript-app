import React from "react";
import clsx from "clsx";
import {
  createStyles,
  lighten,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { RootState } from "../../redux/rootReducer";
import { connect } from "react-redux"
import '../admin/adminComponent.css';
import { UsersTableState } from "../../redux/usersTable/types";
// import  { deleteUser }  from "../../redux/admin/actions"





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
    alert('user was deleted')
    
  }

  
  
      render () {
      // const  onDeleteUser = (e:any) => {
      //     const {deleteUser} = this.props;
      //     let userid = e.currentTarget.id
      //     // deleteUser()
      //     console.log(e.currentTarget.id);
          
      //   }
        // console.log(this.props.users)
        
        // function UserList(props:any){
        //       const users = props.users;
        //       // console.log(users);
              
              const items = this.props.users.map((user:any) => <TableRow className="user-row">
                <TableCell >
                  {user.name} 
                </TableCell>
                <TableCell >
                  {user.email}
                </TableCell>
                <TableCell className="delete">
                  <div id={user.id} key={user.email} 
                  onClick={(e:any)=>this.onDeleteUser(e)}
                  >x</div> 
                </TableCell>
            </TableRow>);
      //   return (<ul>{items}</ul>)
      // }

        return (
          <div >
            <Paper >
                <Table>
                  <TableBody>  
                    {/* <UserList 
                      users={this.props.users}
                    /> */}
                    {items}
                  </TableBody>
                </Table>
            </Paper> 
          </div>
        );
        
      


      
      }

   
  
}


export default TableUsersComponent;


// const mapStateToProps = (state: RootState) => ({
//   users: state.admin.users
// });

// export default connect(mapStateToProps, deleteUser)(TableUsers)
