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
import { NavigationContainer } from "@react-navigation/native";
import { NewsContextProvider } from "./src/services/news/news.context";
import { LoginScreen } from "./src/features/auth/screens/login.screen";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailNews } from "./src/features/news/screens/detail.screen";
import { MainScreen } from "./src/features/home/screens/main.sreen";
import { AddProfileScreen } from "./src/features/auth/screens/addProfile.screen";
import { NewsTrending } from "./src/features/news/screens/newsTrending.screen";
import { NewsCategoryScreen } from "./src/features/news/screens/newsCategory.screen";
import { RegisterScreen } from "./src/features/auth/screens/register.screen";

const Stack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
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
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={createScreenOptions}
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />

              <Stack.Screen name="Main" component={MainScreen} />

              <Stack.Screen name="AddProfile" component={AddProfileScreen} />
              <Stack.Screen name="DetailNews" component={DetailNews} />
              <Stack.Screen name="NewsTrending" component={NewsTrending} />
              <Stack.Screen
                name="NewsCategory"
                component={NewsCategoryScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NewsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
