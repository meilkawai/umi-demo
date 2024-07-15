import React,{ useState } from 'react'
import {history,Link} from 'umi'
import Headers from '../../components/headers'
import './index.less'
import {Route,Routes} from 'react-router-dom'
import LoginPages from '../login/index'
import TabAside from '../../components/Tabs'

export default function ShowChildApp() {
  const [component, setComponent] = useState(null);
  // const goToDetai=()=>{
  //   history.push('/order')
  // }
  // const loadComponent = (path) => {
  //   import(`@/pages/${path}`).then((module) => {
  //     setComponent(() => module.default);
  //   });
  // };
  let componentChildInfo = '<CategoryPage/>'
  return (
    <div className='container-showchild'>
      <Headers>登出</Headers>
     <div className='left'>
      <Link className='showchildren-list' to='/showChildApp' >主应用</Link>
        {/* <div className='showchildren-list' onClick={goToDetai}>主应用</div> */}

        <div className='showchildren-list'>子应用</div>
     </div>
     <div className='right'>
     <TabAside></TabAside>

      {/* <Outlet/> */}
     {/* <Link className='showchildren-list' to='/categoryList'>主应用</Link> */}
     {/* <div>{component && React.createElement(component)}</div> */}
     </div>
      {/* <div className='showchildren'>
        <div className='showchildren-list' onClick={goToDetai}>主应用</div>
        <div className='showchildren-list'>子应用</div>
      </div> */}
    </div>
  )
}
