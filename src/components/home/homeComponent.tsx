import React from 'react';
import './home.css';
import { Link, Redirect } from 'react-router-dom';
import {LoginState} from '../../redux/login/types';
import {RootState} from '../../redux/rootReducer';
import { HomeState } from '../../redux/home/types';
import { initialStateLog, login } from '../../redux/login/reducer';
import configureStore from '../../redux/store';
import { object } from 'prop-types';

import AdminComponent from '../../containers/adminContainer';
import BooksListComponent from '../../containers/bookListContainer'
import avaDefault from '../../img/avaDefault.jpg' 
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export interface HomeProps {
  getDataHome: () => Object;
  doUserModalChange: (data: any) => object;
  doLogout: any,
  email: any;
  name: any;
  logOut: boolean;
  isModal: boolean;   
  img: any; 
  isAdmin: boolean;
  countBasket: string;
  pass: any;
}
export class HomeComponent extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    email: '',
    name: '',
    pass: '',
    logOut: false,
    isModal: false,
    img: '' ,
    isAdmin: false,
    countBasket: '',
    isChangeData: false,
    imgChange: "",
    
}

  isLoadStr:any = localStorage.getItem('load');
  isLoad:boolean = JSON.parse(this.isLoadStr);
  
  // amounBasketLength:any
  
  async componentDidMount() {
    
    const { getDataHome } = this.props;
    getDataHome() 

      
    
}

onLogout = (e:any) => {
  e.stopPropagation();
  const { doLogout } = this.props;
  doLogout()
  localStorage.removeItem('load');
  localStorage.removeItem('id');
  localStorage.removeItem('basket');
  localStorage.removeItem('isAdmin');

  // localStorage.removeItem('dataUser');
  // localStorage.removeItem('isAdmin');
  document.location.href = 'http://localhost:3001/home';
         
} 

toLogin = (e:any) => {
  e.stopPropagation();
  document.location.href = 'http://localhost:3001';
}

onModal = () => {
  // console.log('click');
  this.setState({
    isModal: !this.state.isModal
  })
}

handle = (event: any) => {
  this.setState({ [event.target.name]: event.target.value    
  } as any)

}

onChangeImg = (e:any) => {
  let files = e.target.files;
  let reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = (e:any) => {
      this.setState({imgChange: e.target.result})
      // console.log(e.target.result)
  }
}

handleChange = (e:any) => {
  const getDataUserId:any = localStorage.getItem('id')
  // const currentUserId = JSON.parse(getDataUserId)
  e.preventDefault();
  const {doUserModalChange} = this.props;
  doUserModalChange({name: this.state.name, imgChange:this.state.imgChange, id:getDataUserId, pass: this.props.pass, email: this.props.email, isAdmin:this.props.isAdmin})
  console.log(this.props);
  document.location.href = 'http://localhost:3001/home';

}

onChangeData = () => {
  this.setState({
      isChangeData: !this.state.isChangeData,
      name: this.props.name,
      // pass: this.props.pass,
      // email: this.props.email,
      isAdmin: this.props.isAdmin
  })
}



el:any = null
// imgUser:any =null
adminComponent:any
  render () {
    if (!this.isLoad) {
      
      this.el = <div className="logout" onClick={this.toLogin}>Log in</div>
    }
    else {
      this.el = <div className="logout " onClick={this.onLogout}>Logout</div>
    }
    
    if(this.props.isAdmin) {
      this.adminComponent = <li><Link to="/admin">Admin</Link></li>
    }

    const changeUserData = this.state.isChangeData && <form> 
    <input type="text" name="name" onChange={this.handle} placeholder="Your new name" value={this.state.name}/>
    <input id="inp" type="file" name="imgChange" onChange={(e:any)=>this.onChangeImg(e)}/>
    <button onClick={(e:any)=>this.handleChange(e)}>Apply</button>
</form>

    return (
      <div className="Home">  
           
        <div className="home-header">
          <ul>
            <li><Link to="/basket"><ShoppingBasketIcon></ShoppingBasketIcon>
            {/* {this.amounBasketLength} */}
            {this.props.countBasket}
            </Link></li>
            {this.adminComponent}
          </ul>
          <div className="user-data-wrap" onClick={this.onModal}>          
            {this.el}
            <div className="user-data">Hello: {this.props.email} <div className="user-ava"><img src={this.props.img} alt="userAva"/></div> </div>
          </div>
        </div>    
        <div className="home-wrap">
          {/* <div className="modal">{modal}</div> */}
          
            <Modal open={this.state.isModal} 
              onClose={this.onModal}
              style={{display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',}}
            >
                    <Fade in={this.state.isModal}>
                        <div 
                        style={{height: "450px", width: "500px", backgroundColor:"rgb(125, 195, 207)", display: 'flex',
                        alignItems: 'center',
                        flexDirection: "column",
                        padding: "10px",
                        borderRadius: "20px"
                      }}
                        >
                        <div className="user-img">
                            <img src={this.props.img} style={{height: "250px", width: "200px", }}/>
                        </div>
                        
                        {/* <img className="img" src="" /> */}
                        <div><b>User's name: </b>{this.props.name}</div>
                        <button onClick={this.onChangeData} style={{margin: "10px"}}>Change user's data</button>
                        {changeUserData}
                           
                        </div>
                    </Fade>
                </Modal> 
          <BooksListComponent/>
        
        </div>              
      </div>
    );
  }


 
}

export default HomeComponent;
