import { useState } from "react"


export default function tabsNavModel() {

  const [tabsList, setTabsList] = useState([]);


  function addTab() {

  }

  function refreshTab() {

  }

  function closeTab() {
    
  }

  function closeOther() {
    
  }

  function closeAll() {
    
  }


  /**
    通过 pathname 匹配对应路由, 找到路由信息, 合成 tabItem
    tabItem: {
      icon: 'icon'
      name: 'home',
      title: '首页',
      pathname: '/home',

      // location: {
      //   query: {},
      //   search: '',
      //   state: undefined,
      //   hash: ''
      // }
    }
   */

  return {
    tabsList,
  }
}