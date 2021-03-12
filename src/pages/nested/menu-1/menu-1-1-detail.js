import React from "react";
import { Link } from 'umi';

const NestedDetail = (props) => {
  const { match } = props
  console.log(' == Detail ==', props);

  return (
    <div>
      <h3> menu-1-1-detail-{match.params.id}</h3>
      <Link to="/nested/menu-1/menu-1-1"> 返回 </Link>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default NestedDetail;