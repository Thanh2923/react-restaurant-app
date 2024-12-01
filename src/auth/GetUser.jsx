import React from 'react'
import Cookies from 'js-cookie'
const GetUser = () => {
   
        // Lấy thông tin người dùng từ cookie
        const userInfo = Cookies.get('user_info')
       if(userInfo){
        let user = JSON.parse(userInfo);
        return user 
       }else{
        return null
       }
 
}

export default GetUser
