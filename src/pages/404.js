import React from 'react';
import { Link } from 'umi';

export default () => {
  return (
    <div>
      <h1>
        Page 404
      </h1>
      <Link to="/home"> 返回首页 </Link>
    </div>
  );
}
