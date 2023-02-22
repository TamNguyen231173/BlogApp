import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ListNewsCategory } from "../../features/news/components/listNewsCategory.component";
import { View, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const createScreenOptions = () => {
  return {
    tabBarLabelStyle: {
      fontSize: 12,
      textTransform: "capitalize",
      justifyContent: "center",
    },
    tabBarItemStyle: {
      shadowColor: "transparent",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "rgba(0,0,0,0.5)",
      backgroundColor: null,
      borderWidth: 0,
      width: Tab.tabWidth,
    },
    tabBarScrollEnabled: true,
    tabBarStyle: {},
  };
};

export const TabsView = ({ tabs }) => {
  return (
    <View
      style={{
        flex: 1,
        height: 600,
      }}
    >
      <Tab.Navigator screenOptions={createScreenOptions}>
        {tabs &&
          tabs.map((name) => {
            return (
              <Tab.Screen key={name} name={name}>
                {(props) => <ListNewsCategory {...props} tab={name} />}
              </Tab.Screen>
            );
          })}
      </Tab.Navigator>
    </View>
  );
};
