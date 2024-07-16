import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>子应用的东西</h1>
      {/* <Link  to='/login'>子应用</Link> */}
      <button onClick={() => {
  window.history.pushState(
    {
      user: {  }
    },
    'http://localhost:8000/',
    '/showChildApp' 
  );
}}>跳回主应用</button>
    </div>
  );
}
