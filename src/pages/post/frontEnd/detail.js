import React from "react";
import { Link } from 'umi';

const FrontEnd = () => {
  return (
    <div> 
      前端详情
      <Link to="/post/frontEnd"> 返回前端 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default FrontEnd;