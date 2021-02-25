import React from "react";
import { Link } from 'umi';

const FrontEnd = () => {
  return (
    <div> 
      menu-2-detail
      <Link to="/nested/menu-2"> 返回 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default FrontEnd;