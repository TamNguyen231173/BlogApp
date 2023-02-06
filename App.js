import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
	useFonts as usePoppins,
	Poppins_400Regular,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/features/home/screens/home.screen";
import { ExploreScreen } from "./src/features/explore/screens/explore.screen";
import { BookmarkScreen } from "./src/features/bookmark/screens/bookmark.screen";
import { ProfileScreen } from "./src/features/profile/screens/profile.screen";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LoginScreen } from "./src/features/login/screens/login.screen";
import { NewsContextProvider } from "./src/services/news/news.context";

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
	};
};

export default function App() {
	let [poppinsLoaded] = usePoppins({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	if (!poppinsLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<NewsContextProvider>
					<NavigationContainer>
						<Tab.Navigator
							screenOptions={createScreenOptions}
							tabBarOptions={{
								activeTintColor: "#1877F2",
								inactiveTintColor: "gray",
							}}
						>
							<Tab.Screen name="Home" component={HomeScreen} />
							<Tab.Screen
								name="Explore"
								component={ExploreScreen}
							/>
							<Tab.Screen
								name="Bookmark"
								component={BookmarkScreen}
							/>
							<Tab.Screen
								name="Profile"
								component={ProfileScreen}
							/>
						</Tab.Navigator>
					</NavigationContainer>
				</NewsContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
