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
  bookTitle: string;
  bookAuthor: string;
  bookDescript: string;
  bookPrice: string;
  bookImg: any;
}


export class TableBooksComponent extends React.Component<BooksProps, BooksTableState> {
    state: BooksTableState = {
      bookToAdd: {},
      allBooks: [],
      isOpenForm: false,
      bookTitle: '',
      bookAuthor: '',
      bookDescript: '',
      bookPrice: '',
      bookImg: ''
  }

  componentDidMount () {
    const { getBooks } = this.props;
    getBooks() 
  }

  handle = (e: any) => {
      this.setState({ [e.target.name]: e.target.value    
      } as any)
      
  }

  onGetImg = (e:any) => {
    let files = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e:any) => {
          this.setState({bookImg: e.target.result})
          // console.log(e.target.result)
      }
}

  onSend = () => {
    // console.log(this.state);
    const {addBook} = this.props;
    addBook({ bookTitle: this.state.bookTitle, bookAuthor: this.state.bookAuthor, bookDescript: this.state.bookDescript, bookPrice: this.state.bookPrice, bookImg: this.state.bookImg})
    this.setState(this.state)
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
    // console.log(e.currentTarget.id);
    
  }

  btnOpen:string = '';
  
      render () {

        if (this.state.isOpenForm) {
          this.btnOpen = "Close"
        } else {
          this.btnOpen = 'Add new book'
        }

        const openForm = this.state.isOpenForm &&  <div className="form-to-add"><TextField className="inp" name="bookTitle" placeholder="Book's title" onChange={(e:any)=>this.handle(e)}/><TextField className="inp" name="bookAuthor"  placeholder="Author" onChange={(e:any)=>this.handle(e)}/><TextField className="inp" name="bookDescript"  placeholder="Description" onChange={(e:any)=>this.handle(e)}/><TextField className="inp" name="bookPrice"  placeholder="Price" onChange={(e:any)=>this.handle(e)}/><TextField type="file" name="bookImg"  className="inp" placeholder="Add cover" onChange={(e:any)=>this.onGetImg(e)}/> <Button id="btn-send" variant="contained" color="secondary" onClick={this.onSend}>Send</Button></div>
         
        // console.log(this.props.allBooks)
        let books = this.props.allBooks.books
              const itemsBooks = this.props.allBooks.map((book:any) => <TableRow > 
                <TableCell >
                  {book.bookTitle} 
                </TableCell>
                <TableCell >
                  {book.bookAuthor}
                </TableCell>
                <TableCell >
                  {book.bookPrice}
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
