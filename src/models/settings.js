import Service from '../services'

export default {
  namespace: 'settings',
  state: {
    theme: 'dark',
    collapsed: false,
  },
  reducers: {
    setTheme(state, { payload: { theme } }) {
      return { ...state, theme };
    },
    setCollapsed(state, { payload: { collapsed } }) {
      return { ...state, collapsed };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  effects: {
    *asyncTest2({ payload: { collapsed = 1 } }, { call, put }) {
      yield call(Service.settings.test, {});
      yield put({
        type: 'setCollapsed',
        payload: { collapsed },
      });
    }
    // subscriptions: {
    //   setup({ dispatch, history }) {
    //     return history.listen(({ pathname, query }) => {
    //       if (pathname === '/users') {
    //         dispatch({ type: 'fetch', payload: query });
    //       }
    //     });
    //   },
    // },
  }
}