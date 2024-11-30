import React, { useState,useEffect } from 'react'
import Cookies from 'js-cookie'
const GetUser = () => {
    const [user,setUser] = useState(null);
    useEffect(() => {
        // Lấy thông tin người dùng từ cookie
        const userInfo = Cookies.get('user_info');
        if (userInfo) {
          setUser(JSON.parse(userInfo));  // Chuyển đổi chuỗi JSON thành đối tượng
        }
      }, []);
  return user
}

export default GetUser
