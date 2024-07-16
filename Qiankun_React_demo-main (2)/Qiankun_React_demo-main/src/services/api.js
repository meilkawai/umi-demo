// src/services/api.js
import request from '@/utils/request';

// export async function fetchUserData() {
//   return request.get('/user/data');
// }

export async function resetCatgoryList(payLoad) {
    // console.log(payLoad);
    // console.log(payLoad.payLoad);
    // console.log(payLoad.payLoad.id);
    // console.log('api',payload.id,payload.name);
  return await request.put('/category/_token/update', {
    id:payLoad.payLoad.id,
    name:payLoad.payLoad.name
  });
}

// 其他 API 调用...
