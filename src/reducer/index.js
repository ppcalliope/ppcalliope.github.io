import { combineReducers } from 'redux';
import story from './story';
import user from './user';

export default combineReducers({
    story,
    user
});