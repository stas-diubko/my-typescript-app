import axios from 'axios';

export function request(url:string,  method: any, body?: object) {
    
    var headers = {
        'Content-Type': 'application/json',  
        'Authorization': `Bearer ${localStorage.getItem('token')}` || '' 
    }
   
    return axios({
        method: method,
        url: `http://localhost:4200/${url}`,
        data: body,
        headers: headers
      }).then((response : any) => {
          return  response.data
        })
   
} 
