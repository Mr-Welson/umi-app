import React from "react";
import { Link } from 'umi';

const About = (props) => {
  console.log('=== About ===', props);
  return (
    <div> 
      关于 
      <Link to="/home"> 首页 </Link>
      <Link to="/post"> 重定向 </Link>
    </div>
  )
}

export default About;