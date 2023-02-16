import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const NotificationContainer = styled.View`
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,
`;

export const SearchbarView = styled(Searchbar)`
  border-radius: ${(props) => props.theme.radius[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border: 0.5px solid ${(props) => props.theme.colors.ui.secondary};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
