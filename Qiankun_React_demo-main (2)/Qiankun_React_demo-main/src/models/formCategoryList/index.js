import { getColumnAsyncService, getDataAsyncService, editRecord } from '../../services/formCategoryList/index'
import { call, put } from 'redux-saga/effects';
import { resetCatgoryList } from '../../services/api'

const CategoryModal = {
    namespace: 'category',
    state: {
        updateCategory: {
            id: 0,
            name: ""
        },
        token: ''
    },
    reducers: {
        getListData(state, { payLoad }) {
            //    console.log("@@",payLoad);
            return payLoad
        },
        // 得到修改结果
        getCateporyListResetResult(state, {payLoad}) {
            // console.log("@@", payLoad.data);
            const resultOfPut = payLoad
            return resultOfPut
        }

        // 得到id
        // async toUpdate(params) {
        //     // updateCategory.id = params.id
        //     // updateCategory.name = params.name
        //     console.log(params);
        // }
    },
    effects: {
        // 无返回值 void
        // effects: put call
        *getListAsync(type, { put, call }) {

            // 需要数组来接
            const dataSource = yield call(getDataAsyncService);
            // console.log(dataSource);
            const { rows } = dataSource.data;
            // console.log("111",rows);
            const columns = yield call(getColumnAsyncService);
            yield put({
                type: 'getListData',
                payLoad: { rows, columns }
            })
            //   yield put('getList')
        },
        *edit({ payLoad }, { call, put }) {
            // console.log('payLoad');
            // alert('aaa')
            //    const result=  yield call(editRecord, { payLoad })
            const result = yield call(resetCatgoryList, { payLoad })
            // console.log("@@@@@", payLoad);  // 请先登录，需要token
            yield put({
                type: 'getCateporyListResetResult',
                payLoad: result
            })
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
                if (location.pathname === '/categoryList' || location.pathname === '/showChildApp') {
                    dispatch({
                        type: 'getListAsync',
                        // payLoad:
                    })
                }
            })
        }

    }
}

export default CategoryModal