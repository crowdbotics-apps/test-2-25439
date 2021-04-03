import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial221651Navigator from '../features/Tutorial221651/navigator';
import NotificationList221623Navigator from '../features/NotificationList221623/navigator';
import Settings221622Navigator from '../features/Settings221622/navigator';
import Settings221614Navigator from '../features/Settings221614/navigator';
import UserProfile221612Navigator from '../features/UserProfile221612/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial221651: { screen: Tutorial221651Navigator },
NotificationList221623: { screen: NotificationList221623Navigator },
Settings221622: { screen: Settings221622Navigator },
Settings221614: { screen: Settings221614Navigator },
UserProfile221612: { screen: UserProfile221612Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
