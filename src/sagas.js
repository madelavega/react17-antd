import { all } from 'redux-saga/effects';
import documentSagas from './documents/sagas';

export default function* rootSaga() {
  yield all([
    ...documentSagas,
  ]);
}