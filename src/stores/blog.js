import { createHook, createStore } from 'react-sweet-state';
import { listPost } from '../components/api';

const Store = createStore({
  initialState: {
    isLoading: true,
    data:[],
  },
  actions: {
    updateStore:
      (newState) =>
      async ({ setState }) => {
        setState(newState);
      },
    GetPost:
      () =>
      async ({ setState, getState }) => {
        setState({ isLoading: true });

        try {
          const res = await listPost(getState());
            setState({ data: res.data.results, isLoading: false });
        } catch (err) {
          setState({
            error: err && err.message ? err.response.message : 'Data not found',
          });
        }
      },
  },
});

export const useListStore = createHook(Store);
