import React from "react";
import { AboutBookState } from "../../redux/aboutBook/types";
import { Link } from 'react-router-dom';

export interface  AboutBookProps {
    book: any;
    id: any;
    isShow: boolean;
    getIdBook: (data:any) => any;

}

export class AboutBookComponent extends React.Component <any, any> {

    state: AboutBookState = {
        book: '',
        id: "",
        isShow: false 
    }

    componentDidMount () {
        
        const { getIdBook } = this.props;
        getIdBook(this.props.match.params.id) 
        
        
        
        
    }

    render () {
        const isShow = this.props.isShow && <div>
        
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center",  paddingTop:"35px"}}>
            <div style={{textAlign:"center", fontSize:"24px"}}><b>Book Title: <span style={{color:"brown"}}>{this.props.book.bookTitle}</span></b></div>
            <h3 style={{textAlign:"center", fontSize:"24px"}}>Author: <span style={{color:"brown"}}>{this.props.book.bookAuthor}</span></h3>
            
            <div style={{textAlign:"center", fontSize:"24px"}}><img src={this.props.book.bookImg} alt={this.props.book.bookTitle}/></div>
            <div style={{textAlign:"center", width:"600px"}}>
                <h4>Description</h4>
                <p>{this.props.book.bookDescript}</p>
                <h4>Price: <span style={{color:"brown"}}>{this.props.book.bookPrice}</span></h4>
            </div>
            
        </div>
    </div>
     
        return(
            <div>
                <div className="home-header">
                    <div style={{display:"flex", alignItems: "center"}}>
                        <Link  to="/home">Home</Link>  
                    </div>
                    <h2>Book Shop</h2>
                    <div></div>
                </div>
                {/* <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems:"center",  paddingTop:"35px"}}>
                    <div style={{textAlign:"center", fontSize:"24px"}}><b>Book Title: <span style={{color:"brown"}}>{this.props.book.bookTitle}</span></b></div>
                    <h3 style={{textAlign:"center", fontSize:"24px"}}>Author: <span style={{color:"brown"}}>{this.props.book.bookAuthor}</span></h3>
                    
                    <div style={{textAlign:"center", fontSize:"24px"}}><img src={this.props.book.bookImg} alt={this.props.book.bookTitle}/></div>
                    <div style={{textAlign:"center", width:"600px"}}>
                        <h4>Description</h4>
                        <p>{this.props.book.bookDescript}</p>
                        <h4>Price: <span style={{color:"brown"}}>{this.props.book.bookPrice}</span></h4>
                    </div>
                    
                </div> */}
                {isShow}
            </div>
        )
    }
}

export default AboutBookComponent;