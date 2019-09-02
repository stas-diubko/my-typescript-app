import React from 'react';
import { UserModalState, UserChange } from '../../redux/modalUser/types';
import avaDefault from '../../img/avaDefault.jpg' // relative path to image 


export interface ModalUserProps {
    doUserModalChange: (data: UserChange) => object;
    name: any;
    img: string;
    isChangeData: boolean;  
    imgChange:any  
  }

export class ModalUserComponent extends React.Component<ModalUserProps, UserModalState> {
    state: UserModalState = {
        name: "",
        img: "",
        isChangeData: false,
        imgChange: ""
        
    }

    dataUserStr:any = localStorage.getItem('dataUser');
    dataUser:any = JSON.parse(this.dataUserStr);
  
    async componentDidMount() {
        if (this.dataUserStr) {
        this.setState({name: this.dataUser.name})
        } else {
        this.setState({name: ''});
        }
        
    }

    onChangeData = () => {
        this.setState({
            isChangeData: !this.state.isChangeData
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
        const getDataUser:any = localStorage.getItem('dataUser')
        const currentUser = JSON.parse(getDataUser)
        e.preventDefault();
        const {doUserModalChange} = this.props;
        doUserModalChange({name: this.state.name, imgChange:this.state.imgChange, id:currentUser.id})
        // console.log(this.state);

    }

    render () {
        const changeUserData = this.state.isChangeData && <form> 
            <input type="text" name="name" onChange={this.handle} placeholder="Your new name"/>
            <input id="inp" type="file" name="imgChange" onChange={(e:any)=>this.onChangeImg(e)}/>
            <button onClick={(e:any)=>this.handleChange(e)}>Apply</button>
        </form>

        return(
            <div>    
                <img src={avaDefault} alt="userAva"/>
                {/* <img className="img" src="" /> */}
                <div><b>User's name: </b>{this.state.name}</div>
                <button onClick={this.onChangeData}>Change user's data</button>
                {changeUserData}
            </div>
        )
    }

}

export default ModalUserComponent; 