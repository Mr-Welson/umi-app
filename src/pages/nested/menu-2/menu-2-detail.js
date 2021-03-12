import React from "react";
import { Link } from 'umi';

const FrontEnd = () => {
  return (
    <div> 
      <h3> menu-2 详情 </h3> 
      <br />
      <Link to="/nested/menu-2"> 返回 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default FrontEnd;