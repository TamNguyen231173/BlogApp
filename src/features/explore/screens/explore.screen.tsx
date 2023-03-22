import React, { useContext } from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Row } from "../../../components/utility/row.component";
import { TopicItem } from "../../../components/utility/topic-item.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ListNewsTrending } from "../../news/components/listNewsTrending.component";
import { useGetAllPostsQuery } from "../../../redux/api";

const Container = styled(SafeArea)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ListNewsTrendingView = styled(ListNewsTrending)`
  height: 500px;
`;

export const ExploreScreen = () => {
  const { data: news, isLoading } = useGetAllPostsQuery();
  return (
    <Container>
      <Spacer position="bottom" size="medium">
        <Text variant="TitleTab">Explore</Text>
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Row>
          <Text variant="label">Topic</Text>
          <Text variant="caption">See all</Text>
        </Row>
      </Spacer>
      <TopicItem />
      <TopicItem />
      <TopicItem />
      <Spacer position="top" size="large">
        <Row>
          <Text variant="label">Popular Topic</Text>
        </Row>
      </Spacer>
      <ListNewsTrendingView news={news} />
    </Container>
  );
};
