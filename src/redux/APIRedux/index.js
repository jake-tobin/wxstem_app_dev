import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import * as apiTransforms from '../../transforms/apiTransforms'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  requestAllStations: null,
  requestAllStationsSuccess: ['stations'],
  requestAllStationsFailure: null,
  loginUser: ['payload'],
  loginUserSuccess: ['login_info'],
  loginUserFailure: null,
})

export const APIActionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userInfo: {
    loggedIn: false,
    fetching: false,
    username: null,
    login_info: {
      data: {
        error: null,
      },
    },
  },
  networkData: {
    stations: {
      fullList: null,
      strippedList: null,
      sectionedList: null,
      fetching: null,
      error: null,
    },
  },
})

/* ------------- Selectors ------------- */

export const APISelectors = {
  selectStationsFullList: state => state.api.networkData.stations.fullList,
  selectStationsStrippedList: state =>
    state.api.networkData.stations.strippedList,
  selectLoginInfo: state => state.api.userInfo.login_info,
  selectStationsSectionedList: state =>
    state.api.networkData.stations.sectionedList,
  isFetchingStations: state => state.api.networkData.stations.fetching,
  selectStationByHandle: (state, handle, domainHandle) =>
    state.api.networkData.stations.fullList.filter(station => {
      return station.handle === handle && station.domain.handle === domainHandle
    })[0],
  selectUserId: state => state.api.userInfo.id,
}

/* ------------- Reducers ------------- */

// request all the stations in the network
export const stationRequest = state => {
  const newState = {
    networkData: {
      stations: {
        fetching: true,
        fullList: null,
        strippedList: null,
        sectionedList: null,
      },
    },
  }
  return state.merge(newState)
}

// successful station lookup
export const stationRequestSuccess = (state, action) => {
  const list = action.stations
  const strippedList = list.map(station => {
    return {
      name: station.name,
      domain: station.domain.name,
      state: station.geo.state,
      handle: station.handle,
      domainHandle: station.domain.handle,
    }
  })
  const strippedAlphabetizedList = apiTransforms.alphabetizeStations(
    strippedList,
  )
  const fullList = apiTransforms.alphabetizeStations(list)
  const sectionedList = apiTransforms.createSectionedStations(
    strippedAlphabetizedList,
  )
  const newState = {
    networkData: {
      stations: {
        fetching: false,
        error: null,
        fullList: fullList,
        strippedList: strippedList,
        sectionedList: sectionedList,
      },
    },
  }
  return state.merge(newState)
}

// failed to get the stations
export const stationRequestFailure = state => {
  const newState = {
    networkData: {
      stations: {
        fetching: false,
        error: true,
        fullList: null,
        strippedList: null,
      },
    },
  }
  return state.merge(newState)
}

/* ------------- Reducers ------------- */

// request all the stations in the network
export const loginUser = state => {
  const newState = {
    userInfo: {
      loggedIn: false,
      fetching: false,
      login_info: {
        data: {
          error: null,
        },
      },
    },
  }
  return state.merge(newState)
}

// successful station lookup
export const loginUserSuccess = (state, action) => {
  const login_info = action.login_info
  console.tron.log(action.login_info)
  const newState = {
    userInfo: {
      loggedIn: true,
      fetching: false,
      login_info: login_info,
    },
  }
  return state.merge(newState)
}

// failed to get the stations
export const loginUserFailure = state => {
  const newState = {
    userInfo: {
      loggedIn: false,
      fetching: false,
      login_info: {
        data: {
          error: null,
        },
      },
    },
  }
  return state.merge(newState)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_ALL_STATIONS]: stationRequest,
  [Types.REQUEST_ALL_STATIONS_SUCCESS]: stationRequestSuccess,
  [Types.REQUEST_ALL_STATIONS_FAILURE]: stationRequestFailure,
  [Types.LOGIN_USER]: loginUser,
  [Types.LOGIN_USER_SUCCESS]: loginUserSuccess,
  [Types.LOGIN_USER_FAILURE]: loginUserFailure,
})
