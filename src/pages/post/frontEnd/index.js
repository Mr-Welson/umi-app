import React from "react";
import { Link } from 'umi';

const FrontEnd = () => {
  return (
    <div> 前端
      <Link to="/post/frontEnd/Detail"> 详情1 </Link>
      <Link to="/post/frontEnd/Detail/11"> 详情2 </Link>
      <Link to="/post/frontEnd/Detail/22"> 详情3 </Link>
      <Link to="/post/frontEnd/Detail/22/33"> 详情4 </Link>
      <Link to="/post/backEnd"> 后端 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default FrontEnd;