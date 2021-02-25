import React from "react";
import { Link } from 'umi';

const FrontEnd = (props) => {
  return (
    <div>
      <h2> menu-1-1 </h2>
      <Link to="/nested/menu-1/menu-1-1/1"> menu-1-1/1 </Link>
      <Link to="/nested/menu-1/menu-1-1/2"> menu-1-1/2 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default FrontEnd;