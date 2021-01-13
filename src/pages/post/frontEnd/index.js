import React from "react";
import { Link } from 'umi';

const FrontEnd = () => {
  return (
    <div> 前端
      <Link to="/post/backEnd"> 后端 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default FrontEnd;