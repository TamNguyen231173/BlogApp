import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const NotificationContainer = styled.Pressable``;

export const SearchbarView = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border: none;
  width: 90%;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.View`
  border-radius: ${(props) => props.theme.radius[0]};
  border: 1px solid ${(props) => props.theme.colors.ui.secondary};
  flex-direction: row;
  align-items: center;
`;
