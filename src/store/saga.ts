import { all } from 'redux-saga/effects';
import documentsSaga from '../features/documents/saga';


export default function* rootSaga(){
    yield all([documentsSaga()])
}