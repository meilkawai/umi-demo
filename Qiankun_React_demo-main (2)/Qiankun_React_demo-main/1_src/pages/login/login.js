import { connect,history } from "umi";
import React from 'react';
import './login.css'
import
{ Table,Space }
from
"antd"
;
import  {UserModal}  from "../../components/login";

function LoginPage({login}) {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>Invite</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="item">
      <Table columns={columns} dataSource={login.rows} />
      <UserModal></UserModal>
    </div>
  );
}
// 这个函数里面的值为namespace中解构的值
// state: login = datasource
/* loading: {global: false, models: {…}, effects: {…}}
   login: 这就是命名空间中返回的值
     dataSource: (2) [{…}, {…}]
     [[Prototype]]: Object
   router: {location: {…}, action: 'POP'}
*/
const mapStateToProps = ({login})=>{
  return {
    login
  }
}

export default connect(mapStateToProps)(LoginPage)
// export default LoginPage
