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
import './adminComponent.css';
import { deleteUser } from "../../redux/admin/actions"


// const componentDidMount = () => {
//   console.log('test')
// }

// const testFoo = () => {
//   console.log('test Foo')
// }


const EnhancedTableUsers:React.FC = (props:any) =>  {
  
  const onDeleteUser = (e:any):any => {
    
    deleteUser('ccc')
    // console.log('click')
    console.log(e.currentTarget.id)
    // console.log(deleteUser(e.currentTarget.id))
    deleteUser(e.currentTarget.id)

    // testFoo()
  }

  
  let dataUsers:any = props.users

  function UserList(props:any){
    const users = props.users;
    // console.log(users);
    
    const items = users.map((user:any) => <TableRow className="user-row">
      <TableCell >
        {user.name}
      </TableCell>
      <TableCell >
        {user.email}
      </TableCell>
      <TableCell className="delete">
        <div id={user.id} key={user.email} onClick={(e:any)=>onDeleteUser(e)}>x</div> 
      </TableCell>
  </TableRow>);
    return (<ul>{items}</ul>)
  }
// console.log(dataUsers);


  return (
    <div >
      <Paper >
          <Table>
            <TableBody>  
              <UserList 
                users={dataUsers}
              />
            </TableBody>
          </Table>
      </Paper> 
    </div>
  );
}



const mapStateToProps = (state: RootState) => ({
    users: state.admin.users
});
  
  export default connect(mapStateToProps, {deleteUser})(EnhancedTableUsers)