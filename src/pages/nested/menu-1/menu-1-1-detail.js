import React from "react";
import { Link } from 'umi';

const FrontEnd = (props) => {
  return (
    <div> 
      menu-1-1-detail
      <Link to="/nested/menu-1"> 返回 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default FrontEnd;