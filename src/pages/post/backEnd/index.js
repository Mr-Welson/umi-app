import React from "react";
import { Link } from 'umi';

const BackEnd = () => {
  return (
    <div> 后端
      <Link to="/post/frontEnd/333"> 前端 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default BackEnd;