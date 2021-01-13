import React from "react";
import { Link } from 'umi';
import { Button } from "antd";
const Home = () => {
  return (
    <div>
      首页
      <Button>
        <Link to="/about"> 关于 </Link>
      </Button>
      <Button>
        <Link to="/post/frontEnd"> 文章列表 </Link>
      </Button>
      <br />
      <br />
      <img src="static/avatar.jpg"></img>
    </div>
  )
}

export default Home;