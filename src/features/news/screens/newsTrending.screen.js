import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import IonsIcon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { NewsContext } from "../../../services/news/news.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ListNewsTrending } from "../components/listNewsTrending.component";

const SafeAreaView = styled(SafeArea)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[4]};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.View`
  flex: 1;
`;

export const NewsTrending = () => {
  const { isLoading, error, news } = useContext(NewsContext);
  return (
    <SafeAreaView>
      <Header>
        <IonsIcon name="arrow-back-outline" size={20} />
        <Text variant="label">Trending</Text>
        <IonsIcon name="ellipsis-vertical-outline" size={20} />
      </Header>
      <ScrollView>
        <Spacer position="top" size="large">
          <Body>
            <ListNewsTrending news={news} />
          </Body>
        </Spacer>
      </ScrollView>
    </SafeAreaView>
  );
};
