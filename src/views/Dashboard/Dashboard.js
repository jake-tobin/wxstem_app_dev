import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types'
import {Header} from 'react-native-elements'
import {Subheader} from '../../components'
import {AddStationButton} from '../../components'

// Styles
import styles from './DashboardStyles'
import {Colors} from '../../themes'

class Dashboard extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    // console.log(this.props.navigation)
    // const openDrawer = function() {
    //     return this.navigation.navigate("DrawerOpen")
    // }
    console.tron.log(Colors.blue)
    return (
      <View>
        <Header
            backgroundColor={Colors.blue.toString()}
            leftComponent={{ onPress: () => this.props.navigation.toggleDrawer(), icon: 'menu', color: '#fff', size: 30 }}
            centerComponent={{ text: 'Dashboard', style: { color: '#fff', fontWeight: 'bold', fontSize: 18 } }}
        />
        <ScrollView>
            <Subheader title={'Stations'} />
            <AddStationButton />
        </ScrollView>
      </View>
    )
  }
}

export default createStackNavigator(
    {
      Dashboard: { screen: Dashboard },
    },
    {
      initialRouteName: 'Dashboard',
      headerMode: 'none',
    },
  )