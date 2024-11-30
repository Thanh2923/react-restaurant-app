import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useGoogleLogin } from '@react-oauth/google'; // Dùng useGoogleLogin thay vì GoogleLogin
import axios from 'axios'; // Thư viện để gửi yêu cầu HTTP
import Cookies from 'js-cookie'; // Thư viện để thao tác với cookie
import avtata from '../assets/avata.png'; // Hình ảnh avatar

const GoogleLoginButton = () => {
  // Hàm xử lý khi login thành công
  const handleLoginSuccess = async (response) => {
    console.log('Login Successful:', response);

    const token = response.access_token;  // Lấy access_token từ Google OAuth
    console.log('Google Token:', token);  // In ra token để kiểm tra

    if (token) {
      // Lưu token vào cookie với thời gian hết hạn (ví dụ 1 ngày)
      Cookies.set('google_access_token', token, { expires: 1 });

      // Gửi request lấy thông tin người dùng từ Google API
      try {
        const userInfo = await getGoogleUserInfo(token);  // Lấy thông tin người dùng
        console.log('User Info:', userInfo);

        // Tạo đối tượng user bao gồm email, ảnh đại diện, tên và ID
        const user = {
          email: userInfo.email,
          avatar: userInfo.picture,  // Ảnh đại diện
          name: userInfo.name,
          id: userInfo.sub,  // ID người dùng từ Google (unique)
        };

        // Lưu thông tin user vào cookie
        Cookies.set('user_info', JSON.stringify(user), { expires: 1 });  
        if(user){
          toast.success("Login thành công ")
        setTimeout(()=>{
          window.location.reload();
        },2000)
        }
       
        // Bạn có thể thực hiện xử lý tiếp theo như lưu trữ hoặc gửi dữ liệu lên server
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    }
  };

  // Hàm xử lý khi login thất bại
  const handleLoginError = (error) => {
    console.error('Login Failed:', error);
  };

  // Hàm để lấy thông tin người dùng từ Google API
  const getGoogleUserInfo = async (token) => {
    try {
      // Gửi request tới Google API để lấy thông tin người dùng
      const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`,  // Gửi token trong header Authorization
        },
      });

      return response.data;  // Trả về dữ liệu người dùng từ API
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;  // Ném lỗi ra ngoài để xử lý sau
    }
  };

  // Hook để đăng nhập Google
  const googleLogin = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  });

  return (

    <div>
       <ToastContainer
    className="top-0 left-[35%]"
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
      {/* Tuỳ chỉnh giao diện nút đăng nhập Google */}
      <button onClick={() => googleLogin()} className="focus:outline-none">
        <img
          className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity duration-200"
          src={avtata}
          alt="Avatar Login"
        />
      </button>
    </div>
  );
};

export default GoogleLoginButton;
