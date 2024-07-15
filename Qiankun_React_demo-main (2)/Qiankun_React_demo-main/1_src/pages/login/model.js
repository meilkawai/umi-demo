const LoginModel = {
    namespace: 'login',
    state: {},
    reducers: {

        getList(state, { type, payLoad }) {
            // return data;  return newState
            const dataSource = [
                {
                  key: '1',
                  name: '胡彦斌',
                  age: 32,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '2',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
              ];
              
            return {dataSource}
        }
    },
    effects: {
        // 无返回值
        *function_name({ type, payLoad }, effects) {

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
                        type: 'getList',
                        // payLoad:
                    })
                }
            })
        }
    }
}

export default LoginModel