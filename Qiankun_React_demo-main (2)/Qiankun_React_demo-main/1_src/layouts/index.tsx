import { Link, Outlet,history } from 'umi';
import styles from './index.less';

export default function Layout() {
  gotoIndex=()=>{
    history.push('/')
  }
  return (
    <div>
      <button onClick={gotoIndex}>登录</button>
      {/* <Link to="/child">去子应用</Link> */}
      <Outlet />
    </div>
  );
}
