import { useState } from 'react';
import { getUserInfo } from '../../services/login/index.js'
import { call, put } from 'redux-saga/effects';

const loginModal = {
    namespace: 'login',
    state: {
        token: ''
    },
    reducers: {
        loginResultHandle(state, { payLoad }) {
            // console.log("reducers",state);
            return {
                // ...state,
                payLoad,
                token: payLoad.data.data.token
            };
        }
    },
    effects: {
        *loginOption({ payLoad }, { call, put }) {
            // console.log('modal login',payLoad);
            const result = yield call(getUserInfo, { payLoad })
            yield put({
                type: 'loginResultHandle',
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
            // history.listen((location, action) => {
            //     if (location.pathname === '/categoryList' || location.pathname === '/showChildApp') {
            //         dispatch({
            //             type: 'getListAsync',
            //             // payLoad:
            //         })
            //     }
            // })
        }

    }
}

export default loginModal