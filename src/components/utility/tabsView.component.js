import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ListNewsCategory } from "../../features/news/components/listNewsCategory.component";
import { View, StyleSheet } from "react-native";
import { useGetAllCategoriesQuery } from "../../redux/api";

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

export const TabsView = () => {
  const { data: categories } = useGetAllCategoriesQuery();

  const tabs = categories?.map((category) => ({
    name: category.name.toLowerCase(),
    id: category.id,
  }));

  if (!tabs) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        height: 600,
      }}
    >
      <Tab.Navigator screenOptions={createScreenOptions}>
        {tabs &&
          tabs.map(({ id, name }) => {
            return (
              <Tab.Screen key={id} name={name}>
                {(props) => <ListNewsCategory {...props} id={id} />}
              </Tab.Screen>
            );
          })}
      </Tab.Navigator>
    </View>
  );
};
