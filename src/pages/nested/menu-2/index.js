import React from "react";
import { Link } from 'umi';

const BackEnd = () => {

  return (
    <div>
      <h2> menu-2 </h2>
      <Link to="/nested/menu-2-detail"> menu-2/1 </Link>
      <Link to="/nested/menu-2-detail/2"> menu-2/2 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default BackEnd;