import React from "react";
import { Link, history } from 'umi';
import { Button } from 'antd';


const FrontEnd = (props) => {
  // console.log(' == Menu ==', props);
  
  const linkToDetail = (pathname, pageTitle) => {
    history.push({
      pathname,
      state: { pageTitle }
    })
  }
  return (
    <div>
      <h2> menu-1-1 </h2>
      <Button onClick={() => linkToDetail("/nested/menu-1/menu-1-1/1", '1')
      }> menu-1-1/1 </Button>
      <Button onClick={() => linkToDetail("/nested/menu-1/menu-1-1/2", '2')
      }> menu-1-1/2 </Button>
      <Link to="/"> 首页 </Link>
    </div>
  )
}

export default FrontEnd;