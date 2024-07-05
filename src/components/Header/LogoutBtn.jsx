import React,{useContext} from "react";
import { useDispatch } from "react-redux";
import authService from "../../service/auth";
import { logout } from "../../features/auth/authSlice";
import { ThemeContext } from "../../context/ThemeContext.jsx";


function LogoutBtn() {
  const {theme,toggleTheme}=useContext(ThemeContext)
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className={`inline-bock px-6 py-2 duration-200 ${theme === 'light' ? 'hover:bg-blue-100': 'hover:bg-gray-600'} rounded-full`}
    onClick={logoutHandler}>
     <b>Logout</b> 
    </button>
  );
}

export default LogoutBtn;
