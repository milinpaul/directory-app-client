import { all } from 'redux-saga/effects'

import userSaga from '../Pages/Home/sagas'

export default function* rootSaga() {
  yield all([...userSaga])
}
