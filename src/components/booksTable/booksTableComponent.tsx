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
import { BooksTableState } from "../../redux/booksTable/types";
import Button from '@material-ui/core/Button';
import './booksTableComponent.css';
import TextField from '@material-ui/core/TextField';





export interface BooksProps {
  addBook: (data:any) => Object;
  getBooks: () => Object;
  deleteBook: (data:any) => any;
  bookToAdd: Object;
  allBooks: any; 
  isOpenForm: boolean;
}


export class TableBooksComponent extends React.Component<BooksProps, BooksTableState> {
    state: BooksTableState = {
      bookToAdd: {},
      allBooks: [],
      isOpenForm: false
  }

  componentDidMount () {
    const { getBooks } = this.props;
    getBooks() 
    
    
    
  }

  onOpenForm = () => {
      this.setState({
        isOpenForm: !this.state.isOpenForm
    })
  }

  onDeleteBook = (e:any) => {
    const {deleteBook} = this.props;  
    
    deleteBook(e.currentTarget.id)
    alert('book was deleted')
    console.log(e.currentTarget.id);
    
  }

  btnOpen:string = '';
  
      render () {

        if (this.state.isOpenForm) {
          this.btnOpen = "Close"
        } else {
          this.btnOpen = 'Add new book'
        }

        const openForm = this.state.isOpenForm &&  <div className="form-to-add"><TextField className="inp" placeholder="Book's title"/><TextField className="inp" placeholder="Author"/><TextField className="inp" placeholder="Description"/><TextField className="inp" placeholder="Price"/><TextField type="file" className="inp" placeholder="Add cover"/> <Button id="btn-send" variant="contained" color="secondary">Send</Button></div>
         
        // console.log(this.props.allBooks)
        let books = this.props.allBooks.books
              const itemsBooks = this.props.allBooks.map((book:any) => <TableRow > 
                <TableCell >
                  {book.title} 
                </TableCell>
                <TableCell >
                  {book.author}
                </TableCell>
                <TableCell >
                  {book.price}
                </TableCell>
                <TableCell className="delete">
                  <div id={book.id} key={book.id} 
                  onClick={(e:any)=>this.onDeleteBook(e)}
                  >x</div> 
                </TableCell>
            </TableRow>);
      

        return (
          <div >
            <Paper >
                <Table>
                  <TableBody>  
                      {itemsBooks}
                  </TableBody>
                </Table>
            </Paper> 
            
                {openForm}        
            
            
            <Button variant="contained" color="primary" id="btn" onClick={this.onOpenForm}>{this.btnOpen}</Button>
            
          </div>
        );
        
      


      
      }

   
  
}


export default TableBooksComponent;


// const mapStateToProps = (state: RootState) => ({
//   users: state.admin.users
// });

// export default connect(mapStateToProps, deleteUser)(TableUsers)
