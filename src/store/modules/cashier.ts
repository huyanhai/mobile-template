import type { ActionTree, MutationTree, GetterTree } from 'vuex';
import type { TRootState } from '@/store';

export type TCashierState = {
  [key: string]: any;
};

const state: TCashierState = {};

const mutations: MutationTree<TCashierState> = {};

const action: ActionTree<TCashierState, TRootState> = {};

const getters: GetterTree<TCashierState, TRootState> = {};

export default {
  namespace: true,
  state: state,
  mutations: mutations,
  actions: action,
  getters: getters,
};
