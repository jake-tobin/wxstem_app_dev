import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import PropTypes from 'prop-types'

import DashboardStack from '../DashboardStack/DashboardStack'
import MapView from '../MapView/MapView'
import StationsStack from '../StationsStack/StationsStack'

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './MainTabStyles'

import { Colors } from '../../themes'

export default createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color={tintColor} />
        ),
      }),
    },
    Stations: {
      screen: StationsStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="crosshairs" size={30} color={tintColor} />
        ),
      }),
    },
    MapView: {
      screen: MapView,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="map" size={30} color={tintColor} />
        ),
      }),
    },
    Learn: {
      screen: StationsStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="book" size={30} color={tintColor} />
        ),
      }),
    },
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      inactiveTintColor: Colors.white,
      inactiveBackgroundColor: Colors.blue,
      activeTintColor: Colors.white,
      activeBackgroundColor: Colors.darkBlue,
      tabStyle: styles.tabStyle,
      style: {
        backgroundColor: Colors.blue,
      },
    },
  },
)
