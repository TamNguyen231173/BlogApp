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
import { LoginScreen } from "./src/features/auth/screens/login.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  HomeScreen,
  DetailNews,
  MainScreen,
  AddProfileScreen,
  NewsTrending,
  NewsCategoryScreen,
  RegisterScreen,
  NotificationScreen,
  SettingScreen,
  CommentScreen,
  CreateNewsScreen,
  EditProfileScreen,
  ForgotPasswordScreen,
  EmailViaScreen,
  PhoneViaScreen,
  EditPost,
} from "./src/features";

import { Provider } from "react-redux";
import { store } from "./src/redux/store";

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
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
                name="NotificationScreen"
                component={NotificationScreen}
              />
              <Stack.Screen
                name="NewsCategory"
                component={NewsCategoryScreen}
              />
              <Stack.Screen name="SettingScreen" component={SettingScreen} />
              <Stack.Screen
                options={{ ...TransitionPresets.ModalPresentationIOS }}
                name="CommentScreen"
                component={CommentScreen}
              />
              <Stack.Screen name="CreateNews" component={CreateNewsScreen} />
              <Stack.Screen
                options={{ ...TransitionPresets.ModalPresentationIOS }}
                name="EditProfile"
                component={EditProfileScreen}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
              />
              <Stack.Screen name="EmailVia" component={EmailViaScreen} />
              <Stack.Screen name="PhoneVia" component={PhoneViaScreen} />

              <Stack.Screen name="UpdatePost" component={EditPost} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </Provider>
    </>
  );
}
