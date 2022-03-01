import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';

const reducer = combineReducers({ auth });

const store = configureStore({ reducer });

export default store;
