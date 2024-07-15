import { getColumnAsyncService,getDataAsyncService } from './../../services/login/index'
import { call, put } from 'redux-saga/effects';

const LoginModel = {
    namespace: 'login',
    state: {},
    reducers: {
        getListData(state, {payLoad} ) {
        //    console.log("@@",payLoad);
            return payLoad
        },
        // getListColumn(state, {payLoad} ) {
           
        //     return payLoad
        // }
    },
    effects: {
        // 无返回值 void
        // effects: put call
        *getListAsync(type, { put, call }) {
            
            // 需要数组来接
            const dataSource = yield call(getDataAsyncService);
            // console.log(dataSource);
            const {rows} = dataSource.data;
            // console.log("111",rows);
            const columns = yield call(getColumnAsyncService);
            yield put({
                type: 'getListData',
                payLoad: {rows,columns}
            })
            //   yield put('getList')

        }
    },
    subscriptions: {
        // 这里面都是函数
        setup({ dispatch, history }) {
            // dispatch(action)
            /**
             * action:object
             * {
             *    type:'getList',
             *    payLoad: {} 其他的数据
             * }*/
            history.listen((location, action) => {
                if (location.pathname === '/login') {
                    dispatch({
                        type: 'getListAsync',
                        // payLoad:
                    })
                }
            })
        }
       
    }
}

export default LoginModel