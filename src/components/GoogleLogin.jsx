import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  // Hàm xử lý khi login thành công
  const handleLoginSuccess = async (response) => {
    console.log('Login Successful:', response);
    
    const token = response.credential;  // Lấy token từ Google OAuth
    console.log('Google Token:', token);  // In ra token để kiểm tra

    try {
      // Lấy thông tin người dùng từ Google
      const userInfo = await getGoogleUserInfo(token);
      console.log('User Info:', userInfo);  // In ra thông tin người dùng
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // Hàm xử lý khi login thất bại
  const handleLoginError = (error) => {
    console.error('Login Failed:', error);
  };

  // Hàm để lấy thông tin người dùng từ Google API
  const getGoogleUserInfo = async (token) => {
    try {
      const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`,  // Gửi token trong header Authorization
        }
      });

      // Trả về thông tin người dùng từ API
      return response.data;
    } catch (error) {
      // In ra chi tiết lỗi để biết thêm thông tin
      console.error('Error fetching user info:', error.response ? error.response.data : error.message);
      throw error;  // Ném lỗi ra ngoài để xử lý sau
    }
  };

  return (
    <div className="App mt-[200px]">
    <h2>Hello</h2>
      <h1>Login with Google</h1>
      <GoogleOAuthProvider clientId="510283948036-q5vh4tsbgq2lvnr5bulm1u71k146ic3j.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleLoginButton;
