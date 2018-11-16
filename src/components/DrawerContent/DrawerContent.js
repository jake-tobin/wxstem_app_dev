import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { APISelectors } from '../../redux/APIRedux'
import { NavigationActions } from 'react-navigation'

import { DrawerItems, SafeAreaView } from 'react-navigation'
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import LoginModal from '../Modals/LoginModal'

import { Images } from '../../themes'
import styles from './DrawerContentStyles'

class DrawerContent extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    login_info: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      logInModalVisible: false,
    }
  }

  setLogInModalVisible(visible) {
    if (visible) {
      this.props.navigation.toggleDrawer()
    }
    this.setState({ logInModalVisible: visible })
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    })
    this.props.navigation.dispatch(navigateAction)
  }

  render() {
    const isLoggedIn = this.props.login_info.logged_in
    let loginControl
    let userName

    if (isLoggedIn) {
      loginControl = (
        <TouchableOpacity
          onPress={() => {
            this.setLogInModalVisible(!this.state.logInModalVisible)
          }}
        >
          <Text style={styles.drawerItem}>Log Out</Text>
        </TouchableOpacity>
      )

      userName =
        this.props.login_info.login_info.data.first_name +
        ' ' +
        this.props.login_info.login_info.data.last_name
    } else {
      loginControl = (
        <TouchableOpacity
          onPress={() => {
            this.setLogInModalVisible(!this.state.logInModalVisible)
          }}
        >
          <Text style={styles.drawerItem}>Log In</Text>
        </TouchableOpacity>
      )

      userName = 'Guest User'
    }
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.drawerHeader}>
            <View style={styles.userImageContainer}>
              <Image
                source={Images.user}
                style={styles.userImage}
                resizeMode="stretch"
              />
            </View>
            <View style={styles.userMetaContainer}>
              <Text style={styles.userLabel}>logged in as</Text>
              <Text style={styles.userName}>{userName}</Text>
            </View>
          </View>
          <DrawerItems {...this.props} />
          {loginControl}
          <View style={styles.drawerFooter}>
            <Text style={styles.drawerFooterLink}>weatherstem.com</Text>
          </View>
        </SafeAreaView>
        <LoginModal
          visible={this.state.logInModalVisible}
          setLogInModalVisible={visible => this.setLogInModalVisible(visible)}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    login_info: APISelectors.selectLoginInfo(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent)
