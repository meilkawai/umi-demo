import styles from './index.less';
import {Link} from 'umi'
import LoginPages from '../../components/login'

export default function IndexPage() {
  return (
    <div className={styles.box}>
      {/* <h1 className={styles.title}>Page index</h1>  */}
      {/* <Link to="/login">去登录页</Link> */}
      <LoginPages></LoginPages>
    </div>
  );
}
