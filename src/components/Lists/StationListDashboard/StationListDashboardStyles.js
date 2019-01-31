import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../themes/'
import colors from '../../../themes/Colors'

export default StyleSheet.create({
  list_item_container: {
    height: 250,
  },
  list_item_image_container: {
    height: 250,
    width: '100%',
    position: 'absolute',
    zIndex: 0,
    backgroundColor: Colors.blue,
  },
  list_item_image: {
    height: 250,
    width: '100%',
    resizeMode: 'stretch',
  },
  list_item_round_container: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
  },
  list_item_info_container: {
    width: '100%',
    zIndex: 1,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  list_item_name_container: {
    backgroundColor: Colors.white80,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: colors.black10,
    shadowOpacity: 1.0,
    padding: 5,
    width: '100%',
  },
  list_item_station_name_text: {
    color: Colors.black50,
    ...Fonts.style.detailBold,
  },
  list_item_editing_container: {
    zIndex: 2,
    backgroundColor: Colors.black20,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  list_item_temperature: {
    ...Fonts.style.all,
    color: Colors.white,
    textShadowColor: Colors.black50,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 45,
  },
  list_item_temperature_super: {
    ...Fonts.style.detailBold,
    color: Colors.white,
    textShadowColor: Colors.black50,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 20,
    marginTop: 6,
    marginRight: 5,
    alignSelf: 'flex-start',
  },
  list_item_temperature_container: {
    paddingLeft: 20,
    flexDirection: 'row',
  },
  list_item_forecast_list_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
  },
  list_item_forecast_item_container: {
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

    backgroundColor: Colors.white80,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: colors.black10,
    shadowOpacity: 1.0,
  },
  list_item_forecast_item_time: {
    ...Fonts.style.detail,
    color: Colors.black,
    textShadowColor: Colors.black50,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 15,
  },
  list_item_forecast_item_value: {
    ...Fonts.style.detail,
    color: Colors.black,
    textShadowColor: Colors.black50,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 15,
  },
  rowFrontContainer: {
    backgroundColor: Colors.white,
  },
  swipe_item_row_back: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    position: 'absolute',
    zIndex: -1,
    flexDirection: 'row-reverse',
    flex: 1,
    alignItems: 'center',
  },
  swipe_item_remove_button_container: {},
  swipe_item_remove_button: {
    backgroundColor: Colors.red,
    width: 40,
    height: 40,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  weather_icon: {
    ...Fonts.style.weatherIcon,
    color: Colors.white,
    fontSize: 60,
  },
})
