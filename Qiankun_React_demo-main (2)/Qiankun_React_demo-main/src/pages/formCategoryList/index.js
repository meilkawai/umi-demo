import { connect, history } from "umi";
import React, { useEffect } from 'react';
import './index.css'
import { Table, Space }
  from
  "antd"
  ;
import UserModal  from "../../components/formCategoryList";

function CategoryPage({ category, dispatch }) {
  // useEffect(() => {
  //   dispatch({
  //     // 'model中的namespace'
  //     type: 'category/getListAsync',
  //   })
  // }, [])
  const onFinish = (value) => {
    // console.log('success', value);
    // alert(value)
    dispatch({
      // 'model中的namespace'
      type: 'category/edit',
      payLoad: value
    })
  }
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
      render: (record) => (
        <Space size="middle">
          <UserModal record={record} onFinish={onFinish}>修改</UserModal>
          <UserModal >删除</UserModal>
        </Space>
      ),
    },
  ];

  return (
    <div className="item">
     {/* <div> <button onClick={()=>{
        dispatch({
              // 'model中的namespace'
              type: 'category/getListAsync',
            })
      }}>更新</button></div> */}
      <Table columns={columns} dataSource={category.rows} />
      {/* <UserModal ></UserModal> */}
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
const mapStateToProps = ({ category }) => {
  // console.log('@@@@@', category);
  return {
    category
  }
}

export default connect(mapStateToProps)(CategoryPage)
// export default LoginPage
