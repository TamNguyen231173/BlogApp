import React, { useContext } from "react";
import { SvgXml } from "react-native-svg";
import logo from "../../../../assets/logo";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { NewsTrending } from "../../news/components/newsTrending.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import notify from "../../../../assets/notify";
import { TabsView } from "../../../components/utility/tabsView.component";
import { NewsContext } from "../../../services/news/news.context";
import {
  Container,
  NotificationContainer,
  SearchbarView,
  Row,
} from "../components/home.style";
import { NavigateButton } from "../../../components/utility/navigate-button.component";

export const tabs = [
  "all",
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export const HomeScreen = () => {
  const { isLoading, error, news } = useContext(NewsContext);
  return (
    <SafeArea>
      <Container>
        <Row>
          <SvgXml width={101} height={32} xml={logo} />
          <NotificationContainer>
            <SvgXml width={50} height={50} xml={notify} />
          </NotificationContainer>
        </Row>
        <Spacer position="top" size="large">
          <SearchbarView placeholder="Search" placeholderTextColor="#A0A3BD" />
        </Spacer>
        <Spacer position="top" size="large">
          <Row>
            <Text variant="label">Trending</Text>
            <NavigateButton screenName="NewsTrending">
              <Text variant="caption">See all</Text>
            </NavigateButton>
          </Row>
        </Spacer>
        <Spacer position="top" size="medium">
          <NewsTrending news={news[1]} />
        </Spacer>
        <Spacer position="top" size="large">
          <Row>
            <Text variant="label">Latest</Text>
            <NavigateButton screenName="NewsCategory">
              <Text variant="caption">See all</Text>
            </NavigateButton>
          </Row>
          <Row>
            <TabsView tabs={tabs} />
          </Row>
        </Spacer>
      </Container>
    </SafeArea>
  );
};
