import { combineReducers, createStore, applyMiddleware } from 'redux';

import { TaskReducer } from './reducers/taskReducer';
import { IState } from './IStore';
import ReduxLogger from 'redux-logger';


// 複数の reducer を束ねる
const combinedReducer = combineReducers<IState>({
    taskList: TaskReducer, // 追加
    // reducer が増えたら足していく
});

// グローバルオブジェクトとして、store を作成する。
const store = createStore(
    combinedReducer,
    applyMiddleware(ReduxLogger)
);

export default store;