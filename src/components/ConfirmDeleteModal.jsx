import React from 'react';

const ConfirmDeleteModal = ({id,isOpen,setIsModalOpen,handleClearCart}) => {
  if (!isOpen) return null;  // Nếu modal không mở thì không render gì

  return (
    <div className="fixed inset-0 flex z-30 items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white motion-preset-expand motion-duration-1000 rounded-lg p-6 shadow-lg w-100">
        <h2 className="text-xl font-bold mb-4">Bạn có chắc muốn xóa?</h2>
        <p className="mb-4">Bạn chắc chắn muốn xóa mục này khỏi giỏ hàng?</p>
        <div className="flex justify-end gap-4">
          <button 
           onClick={()=>setIsModalOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            Hủy
          </button>
          <button 
          type='button'
              onClick={() => handleClearCart(id)} 
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
