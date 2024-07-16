import { Link, history } from 'umi';
import './index.less';

export default function Headers(props) {
  
  const goToLoginPage = () => {
    history.push('/login')
  }
  const goToLayout=()=>{
    history.push('/')
  }
  return (
    <div className='container-headers'>
        <ul >
          <li onClick={goToLayout}>首页</li>
          <li>xx</li>
          <li>xx</li>
          <li>xx</li>
          <li onClick={goToLoginPage}>{props.children}</li>
        </ul>
    </div>
  );
}
