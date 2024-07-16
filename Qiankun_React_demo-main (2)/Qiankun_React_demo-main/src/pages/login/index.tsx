import styles from './index.less';
import { Link, connect } from 'umi'
import LoginPages from '../../components/login'
import Headers from '../../components/headers'

function loginPage({ payLoad, login }) {
  return (
    <div>
      <Headers>登录</Headers>
      <div className={styles.box}>
        {/* <h1 className={styles.title}>Page index</h1>  */}
        {/* <Link to="/login">去登录页</Link> */}

        <LoginPages login={login} payLoad={payLoad}></LoginPages>
      </div>
      </div>
  );
}

const mapStateToProps = ({ login }) => {
  // console.log("pages login",login);

  return {
    login
  }
}
export default connect(mapStateToProps)(loginPage)
