import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import UsersScreen from "../screens/Users";
import UserDetailsScreen from "../screens/Users/UserDetails";

import { AVAILABLE_PLATFORMS, ICONS } from "../constants/application";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" }
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Awesome app"
        }}
      />
    </HomeStack.Navigator>
  );
}

const UserStack = createStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" }
      }}
    >
      <UserStack.Screen
        name="User Screen"
        component={UsersScreen}
        options={{
          title: "User Screen"
        }}
      />
      <UserStack.Screen
        name="User Detail"
        component={UserDetailsScreen}
        options={{
          title: "User Detail"
        }}
      />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const tabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: "#e91e63"
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: () => (
          <TabBarIcon
            name={
              Platform.OS === AVAILABLE_PLATFORMS.IOS
                ? ICONS.HOME.IOS
                : ICONS.HOME.ANDROID
            }
          />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={UserStackScreen}
      options={{
        tabBarLabel: "User",
        tabBarIcon: () => (
          <TabBarIcon
            name={
              Platform.OS === AVAILABLE_PLATFORMS.IOS
                ? ICONS.USERS.IOS
                : ICONS.USERS.ANDROID
            }
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default tabNavigator;