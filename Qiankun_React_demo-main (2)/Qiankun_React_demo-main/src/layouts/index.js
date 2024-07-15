import Headers from '../components/headers'
import './index.less'

export default function Layout(props) {
 
  return (
    <div className='container-layout'>
      <Headers>登录</Headers>
      

      <div className='contentShow' onClick={()=>{
        alert('内容正在填充中...')
      }}>
        内容展示区，请登录
      </div>
    </div>
  );
}
