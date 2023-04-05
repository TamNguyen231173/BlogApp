import React from "react";
import { LogBox } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./home.screen";
import { ExploreScreen } from "../../explore/screens/explore.screen";
import { BookmarkScreen } from "../../bookmark/screens/bookmark.screen";
import { ProfileScreen } from "../../profile/screens/profile.screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-sharp",
  Home_0: "home-outline",
  Explore: "compass-sharp",
  Explore_0: "compass-outline",
  Bookmark: "bookmark-sharp",
  Bookmark_0: "bookmark-outline",
  Profile: "person-sharp",
  Profile_0: "person-outline",
};

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = focused
        ? TAB_ICON[route.name]
        : TAB_ICON[route.name + "_0"];

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarStyle: {
      elevation: 2,
      backgroundColor: "#fff",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
  };
};

export const MainScreen = () => {
  LogBox.ignoreAllLogs();
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarActiveTintColor="#1877F2"
      tabBarInactiveTintColor="gray"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
