import { call, put } from 'redux-saga/effects'
import UserActions from '../redux/APIRedux/User'
import StationActions from '../redux/APIRedux/Stations'

export function* requestAllStations(api, action) {
  const response = yield call(api.get_all_stations)

  if (response) {
    const stations = response.data
    yield put(StationActions.requestAllStationsSuccess(stations))
  } else {
    yield put(StationActions.fetchAllStationsFailure())
  }
}

export function* requestStationCurrent(api, action) {
  const response = yield call(api.get_station_current, action)
  response.id = action.payload.id

  if (response) {
    yield put(StationActions.requestOneStationCurrentSuccess(response))
  } else {
    yield put(StationActions.requestOneStationCurrentFailure())
  }
}

export function* loginUser(api, action) {
  const response = yield call(api.login_user, action)

  if (response) {
    yield put(UserActions.loginUserSuccess(response))
  } else {
    yield put(UserActions.loginUserFailure())
  }
}

export function* createUser(api, action) {
  const response = yield call(api.create_user, action)

  if (response) {
    yield put(UserActions.createUserSuccess(response))
  } else {
    yield put(UserActions.createUserFailure())
  }
}

export function* logoffUser(api, action) {
  const response = yield call(api.logoff_user, action)

  if (response) {
    yield put(UserActions.logoffUserSuccess())
  } else {
    yield put(UserActions.logoffUserFailure())
  }
}
