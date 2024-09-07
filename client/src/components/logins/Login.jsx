import React from "react";

const Login = () => {
  return (
    <div className="grid grid-cols-10 min-w-[700px]">
      <div className="col-span-4">
        <img
          src="/jpg/banner-login.jpg"
          alt="login-banner"
          className="w-full object-contain"
        />
      </div>
      <div className="col-span-6 p-8">
        <p className="font-bold text-base">Xin chào bạn</p>
        <p className="font-bold text-2xl">Đăng nhập để tiếp tục</p>
      </div>
    </div>
  );
};

export default Login;
