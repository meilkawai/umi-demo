
import axios from 'axios'
export const getColumnAsyncService = async (parmes) => {
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
  return columns;
}
export const getDataAsyncService = async () => {
  // return request('http://localhost:8080/category/list', {
  //   method: 'GET'
  // }).then(function (response) {
  //   return response
  // }).catch(function (err){
  //   console.log(err);
  // })

  const result = await axios.get('/api/category/list');
  return result 
}
export const editRecord = async (parmes) => {
  // console.log(parmes);
  const {payLoad} = parmes.payLoad
  const result = await axios.put('/category/_token/update',{
      payLoad
  });
  return result
}
