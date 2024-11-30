import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const PaymentPage = () => {
  // Dữ liệu sản phẩm mẫu
  const product = {
    name: "Laptop XYZ",
    price: 1000,
    quantity: 2,
    total: 2000
  };

  const paymentMethods = [
    { label: 'Credit Card', value: 'creditCard' },
    { label: 'PayPal', value: 'paypal' },
    { label: 'Bank Transfer', value: 'bankTransfer' }
  ];

  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    email: '',
    paymentMethod: ''
  });

  // Xử lý thay đổi giá trị input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thông tin người dùng:', formData);
  };

  return (
   <div className='mt-[70px]'>
     <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Phần bên trái: Form người dùng */}
        <div className="p-6 shadow-lg bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thông tin người dùng</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-600 font-semibold">Số điện thoại</label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập số điện thoại"
                  required
                />
                <FaPhoneAlt className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-600 font-semibold">Địa chỉ</label>
              <div className="relative">
                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập địa chỉ"
                  required
                />
                <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nhập email"
                  required
                />
                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Xác nhận thông tin
            </button>
          </form>
        </div>

        {/* Phần bên phải: Thông tin sản phẩm */}
        <div className="p-6 shadow-lg bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thông tin sản phẩm</h2>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold text-gray-800">{product.name}</p>
              <p className="text-gray-600">Giá: ${product.price}</p>
              <p className="text-gray-600">Số lượng: {product.quantity}</p>
            </div>
            <p className="text-right font-semibold text-gray-800">Tổng: ${product.total}</p>
          </div>

          {/* Phương thức thanh toán */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phương thức thanh toán</h3>
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <div key={method.value} className="flex items-center">
                  <input
                    type="radio"
                    id={method.value}
                    name="paymentMethod"
                    value={method.value}
                    checked={formData.paymentMethod === method.value}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="mr-2"
                  />
                  <label htmlFor={method.value} className="text-gray-600">{method.label}</label>
                </div>
              ))}
            </div>
          </div>

          <button
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Thanh toán
          </button>
        </div>

      </div>
    </div>
   </div>
  );
};

export default PaymentPage;
