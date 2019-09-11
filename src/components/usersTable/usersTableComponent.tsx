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
                  <DeleteIcon  id={user.id} key={user.email}  style={{marginLeft: "80%"}}
                    onClick={(e:any)=>this.onDeleteUser(e)}>
                  </DeleteIcon>
                </TableCell>
            </TableRow>);
     
        return (
          <div >
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