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
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export interface BooksProps {
  addBook: (data:any) => Object;
  getBooks: () => Object;
  deleteBook: (data:any) => any;
  changeDataBook: (data:any) => Object;
  getCurrentBookBook:(data:any) => any;
  bookToAdd: Object;
  allBooks: any; 
  isOpenForm: boolean;
  bookTitle: string;
  bookAuthor: string;
  bookDescript: string;
  bookPrice: string;
  bookImg: any;
  newBookTitle: string;
  newBookAuthor: string;
  newBookDescript: string;
  newBookPrice: string;
  newBookImg: any;
  isOpenmodal:boolean;
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
      bookImg: '',
      newBookTitle: '',
      newBookAuthor: '',
      newBookDescript: '',
      newBookPrice: '',
      newBookImg: '',
      isOpenmodal: false
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
      }
}

onEditBook = (e:any) => {
 
  for(let i = 0; i < this.props.allBooks.length; i++) {
    if (this.props.allBooks[i].id == e.currentTarget.id){
      this.setState({
        bookTitle: this.props.allBooks[i].bookTitle
    })
      
    }
  }
    
let qqq = () => {
    this.setState({
      isOpenmodal: !this.state.isOpenmodal
  })
  }
  setTimeout(function(){
    qqq()
    
  }, 200)

  localStorage.setItem('bookId', e.currentTarget.id)
}

onGetNewImg = (e:any) => {
  let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e:any) => {
        this.setState({newBookImg: e.target.result})
    }
}

  onSend = (e:any) => {
    const {addBook} = this.props;
    addBook({ bookTitle: this.state.bookTitle, bookAuthor: this.state.bookAuthor, bookDescript: this.state.bookDescript, bookPrice: this.state.bookPrice, bookImg: this.state.bookImg})
    this.setState(this.state)
    this.setState({
      bookTitle: '',
      bookAuthor: '',
      bookDescript: '',
      bookPrice: '',
      bookImg: '',
    })
  }

  onOpenForm = () => {
      this.setState({
        isOpenForm: !this.state.isOpenForm
    })
  }

  onDeleteBook = (e:any) => {
    const {deleteBook} = this.props; 
    deleteBook(e.currentTarget.id)
  }

  onCangeBook = (e:any) => {
    const {changeDataBook} = this.props
    changeDataBook({newBookTitle: this.state.newBookTitle,
    newBookAuthor: this.state.newBookAuthor,
    newBookDescript: this.state.newBookDescript,
    newBookPrice: this.state.newBookPrice,
    newBookImg: this.state.newBookImg, 
    bookId: localStorage.getItem('bookId')})
    document.location.href = 'http://localhost:3001/admin';
  }
  
  btnOpen:string = '';
  
      render () {

        if (this.state.isOpenForm) {
          this.btnOpen = "Close"
        } else {
          this.btnOpen = 'Add new book'
        }

        const openForm = this.state.isOpenForm &&  <div className="form-to-add">
          <TextField  id="mainInput" className="inp" name="bookTitle" placeholder="Book's title" onChange={(e:any)=>this.handle(e)} value={this.state.bookTitle}/>
          <TextField className="inp" name="bookAuthor"  placeholder="Author" onChange={(e:any)=>this.handle(e)} value={this.state.bookAuthor}/>
          <TextField className="inp" name="bookDescript"  placeholder="Description" onChange={(e:any)=>this.handle(e)} value={this.state.bookDescript}/>
          <TextField className="inp" name="bookPrice"  placeholder="Price" onChange={(e:any)=>this.handle(e)} value={this.state.bookPrice}/>
          <TextField type="file" name="bookImg"  className="inp" placeholder="Add cover" onChange={(e:any)=>this.onGetImg(e)} /> 
          <Button id="btn-send" variant="contained" color="secondary" onClick={(e:any)=>this.onSend(e)}>Send</Button></div>
         
        const itemsBooks = this.props.allBooks.map((book:any) => <TableRow key={book.id}> 
                <TableCell >
                  {book.bookTitle} 
                </TableCell>
                <TableCell >
                  {book.bookAuthor}
                </TableCell>
                <TableCell >
                  {book.bookPrice} $
                </TableCell>
                <TableCell align="right" className="delete">
                
                  <EditIcon id={book.id} 
                    onClick={(e:any)=>this.onEditBook(e)}
                    style={{marginRight: "15px"}}
                  ></EditIcon>
                 
                <DeleteIcon id={book.id} key={book.id} 
                  onClick={(e:any)=>this.onDeleteBook(e)}></DeleteIcon>
                </TableCell>
          </TableRow>);
      

        return (
          <div className="books-wrap">
              <Modal  open={this.state.isOpenmodal} 
              onClose={this.onEditBook}
              style={{display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',}}>
                  <Fade in={this.state.isOpenmodal}>
                    <div style={{height: "450px", 
                        width: "500px",
                        backgroundColor:"rgb(125, 195, 207)", 
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: "column",
                        padding: "10px",
                        borderRadius: "20px",
                        }}>
                          <div ><span style={{color: "brown", fontSize: "30px", fontWeight: "bold"}}>Book for change:</span><h2>{this.state.bookTitle}</h2></div>
                      <TextField  style={{marginTop: "20px"}} className="inp" name="newBookTitle" placeholder="New Title" onChange={(e:any)=>this.handle(e)} />
                      <TextField className="inp" name="newBookAuthor"  placeholder="Author" onChange={(e:any)=>this.handle(e)}/>
                      <TextField className="inp" name="newBookDescript"  placeholder="New Description" onChange={(e:any)=>this.handle(e)}/>
                      <TextField className="inp" name="newBookPrice"  placeholder="New Price" onChange={(e:any)=>this.handle(e)}/>
                      <TextField type="file" className="inp" name="newBookImg"  placeholder="New Img" onChange={(e:any)=>this.onGetNewImg(e)}/>
                      
                      <Button id="btn-send" variant="contained" color="secondary" onClick={this.onCangeBook}>Change</Button>
                    </div>
                  </Fade>
              </Modal>
           
            <Paper >
                <Table>
                <TableHead>
                    <TableRow id="tbl-head">
                      <TableCell>Title</TableCell>
                      <TableCell>Author</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell></TableCell> 
                    </TableRow>
                  </TableHead>
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
