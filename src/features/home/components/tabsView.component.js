import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ListNewsCategory } from "./renderListNewsCategory.component";
import { View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const createScreenOptions = () => {
	return {
		tabBarLabelStyle: { fontSize: 12, textTransform: "capitalize" },
		tabBarItemStyle: { width: 108 },
		tabBarScrollEnabled: true,
	};
};

export const TabsView = ({ tabs }) => {
	return (
		<View style={{ flex: 1, height: 200 }}>
			<Tab.Navigator screenOptions={createScreenOptions}>
				{tabs &&
					tabs.map((name) => {
						return (
							<Tab.Screen key={name} name={name}>
								{(props) => (
									<ListNewsCategory {...props} name={name} />
								)}
							</Tab.Screen>
						);
					})}
			</Tab.Navigator>
		</View>
	);
};
