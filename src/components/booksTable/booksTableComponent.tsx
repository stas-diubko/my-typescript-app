import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import '../admin/adminComponent.css';
import { BooksTableState } from "../../redux/booksTable/types";
import Button from '@material-ui/core/Button';
import './booksTableComponent.css';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export interface BooksProps {
  addBook: (data:any) => Object;
  getBooks: (data:any) => Object;
  deleteBook: (data:any) => any;
  changeDataBook: (data:any) => Object;
  getCurrentBookBook: (data:any) => any;
  onErrorOccured: (data:any) => any;
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
  message: string;
  booksLength:any;
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
      isOpenmodal: false,
      bookId: '',
      message: '',
      booksLength: ''
  }

  counter:any = 0;
  counterPage:any = 0;
  amountPage:any = 0;
  isSort:boolean = false;

  componentDidMount () {
    const { getBooks } = this.props;
    getBooks({counter: this.counter, isSort: this.isSort}) 
       
  }
  
  handle = (e: any) => {
      this.setState({ [e.target.name]: e.target.value    
      } as any)
  }

  onGetImg = (e:any) => {
    let files = e.target.files;
      let reader = new FileReader();
      if (files.length === 1) {
      reader.readAsDataURL(files[0]);
            reader.onload = (e:any) => {
                this.setState({bookImg: e.target.result})
            }
      } else {
        const { onErrorOccured } = this.props;
        onErrorOccured('Field of file must be filled')
      }
}

onEditBook = (e:any) => {
  for(let i = 0; i < this.props.allBooks.length; i++) {
    if (this.props.allBooks[i]._id == e.currentTarget.id){
      this.setState({
        newBookTitle: this.props.allBooks[i].title,
        newBookAuthor: this.props.allBooks[i].author,
        newBookDescript: this.props.allBooks[i].description,
        newBookPrice: this.props.allBooks[i].price,
        bookId: e.currentTarget.id
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

    if (files.length === 1) {
      reader.readAsDataURL(files[0]);
            reader.onload = (e:any) => {
                this.setState({newBookImg: e.target.result})
            }
      } else {
        const { onErrorOccured } = this.props;
        onErrorOccured('Field of file must be filled')
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
    this.counterPage = 0;
  }

  onOpenForm = () => {
      this.setState({
        isOpenForm: !this.state.isOpenForm
    })
  }

 
  
  onNextPage = (e:any) => {
    this.counterPage++
    this.counter = this.counter + 2
    if (this.props.booksLength % 2 == 0) {
      if(this.counterPage == Math.floor(this.props.booksLength/2)){
        this.counter = this.counter - 2
        this.counterPage--
      }
    }
    if (this.props.booksLength % 2 == 1) {
      if(this.counterPage == Math.floor(this.props.booksLength/2)+1){
        this.counter = this.counter - 2
        this.counterPage--
      }
    }
    const { getBooks } = this.props;
    getBooks({counter: this.counter, isSort: this.isSort}) 
  }
  
  onPreviousPage = (e:any) => {
    this.counterPage--
    this.counter = this.counter - 2
    if (this.counterPage < 0 ) {
      this.counterPage = 0
      this.counter = 0
    }
  const { getBooks } = this.props;
    getBooks({counter: this.counter, isSort: this.isSort})
  }

  onDeleteBook = (e:any) => {
    const {deleteBook} = this.props; 
    deleteBook(e.currentTarget.id);
    this.counter = 0;
    this.counterPage = 0;
  }

  onChangeBook = (e:any) => {
    const {changeDataBook} = this.props
    changeDataBook({newBookTitle: this.state.newBookTitle,
    newBookAuthor: this.state.newBookAuthor,
    newBookDescript: this.state.newBookDescript,
    newBookPrice: this.state.newBookPrice,
    newBookImg: this.state.newBookImg, 
    bookId: this.state.bookId})
    this.setState({
      newBookTitle: '',
      newBookAuthor: '',
      newBookDescript: '',
      newBookPrice: ''
    })
  }

  onSort = () => {
    this.isSort = !this.isSort
    const { getBooks } = this.props;
    getBooks({counter: this.counter, isSort: this.isSort})
  }
  
  btnOpen:string = '';
  
      render () {
        if (this.props.booksLength % 2 == 0){
          this.amountPage = this.props.booksLength/2
        } else {
          this.amountPage =  Math.floor(this.props.booksLength/2)+1
        }
        
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
         
        const itemsBooks = this.props.allBooks.map((book:any) => 
        <TableRow key={book._id}> 
                <TableCell >
                  {book.title} 
                </TableCell>
                <TableCell >
                  {book.author}
                </TableCell>
                <TableCell >
                  {book.price} $
                </TableCell>
                <TableCell align="right" className="delete">
                  <EditIcon id={book._id} 
                    onClick={(e:any)=>this.onEditBook(e)}
                    style={{marginRight: "15px"}}
                  ></EditIcon>
                <DeleteIcon id={book._id} key={book._id} 
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
                      <TextField  style={{marginTop: "20px"}} className="inp" name="newBookTitle" placeholder="New Title" onChange={(e:any)=>this.handle(e)} value={this.state.newBookTitle} />
                      <TextField className="inp" name="newBookAuthor"  placeholder="Author" onChange={(e:any)=>this.handle(e) } value={this.state.newBookAuthor}/>
                      <TextField className="inp" name="newBookDescript"  placeholder="New Description" onChange={(e:any)=>this.handle(e)} value={this.state.newBookDescript}/>
                      <TextField className="inp" name="newBookPrice"  placeholder="New Price" onChange={(e:any)=>this.handle(e)} value={this.state.newBookPrice}/>
                      <TextField type="file" className="inp" name="newBookImg"  placeholder="New Img" onChange={(e:any)=>this.onGetNewImg(e)}/>
                      
                      <Button id="btn-send" variant="contained" color="secondary" onClick={this.onChangeBook}>Change</Button>
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
                <div style={{padding:"15px", color:"brown", fontSize:"14px", cursor:"pointer"}}><span onClick={this.onSort}>Sort books</span></div>             
                <div style={{padding:"5px"}}><ArrowLeftIcon onClick={(e:any)=>this.onPreviousPage(e)}/><ArrowRightIcon onClick={(e:any)=>this.onNextPage(e)}/></div>
                <div style={{padding:"5px"}}><span style={{color:"brown"}}>Page:</span> {this.counterPage + 1} of {this.amountPage}</div>
            </Paper> 
                {openForm}  
            <Button variant="contained" color="primary" id="btn" onClick={this.onOpenForm}>{this.btnOpen}</Button>
            <div style={{display:"flex", justifyContent:"center", width:"100%", height:"100px", alignItems:"center"}}><span>{this.props.message}</span></div>
          </div>
        );
      }
}

export default TableBooksComponent;
