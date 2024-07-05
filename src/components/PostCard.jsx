import React,{useContext} from "react";
import appwriteService from "../service/post";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function PostCard({ $id, title, featuredimage }) {
  const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <Link to={`/post/${$id}`}>
      <div className={`w-full ${theme=== 'light' ? 'bg-gray-200':'bg-slate-600' }  rounded-xl p-4`}>
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className={`text-xl font-bold`}>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
