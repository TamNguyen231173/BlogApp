import React, { useContext, useState } from "react";
import { SvgXml } from "react-native-svg";
import logo from "../../../../assets/logo";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { NewsTrending } from "../../news/components/newsTrending.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import notify from "../../../../assets/notify";
import { TabsView } from "../../../components/utility/tabsView.component";
import {
  Container,
  NotificationContainer,
  Row,
} from "../components/home.style";
import { NavigateButton } from "../../../components/utility/navigate-button.component";
import List from "../components/list.component";
import SearchBar from "../components/searchBar.component";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useGetAllPostsQuery } from "../../../redux/api/postService";

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

export const HomeScreen = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const { data: news, isLoading } = useGetAllPostsQuery();

  console.log("data home: ", news);

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <Row>
            <SvgXml width={101} height={32} xml={logo} />
            <NotificationContainer
              onPress={() => navigation.navigate("NotificationScreen")}
            >
              <SvgXml width={50} height={50} xml={notify} />
            </NotificationContainer>
          </Row>
          <Spacer position="top" size="large">
            <SearchBar
              searchPhrase={searchPhrase}
              setSearchPhrase={setSearchPhrase}
              clicked={clicked}
              setClicked={setClicked}
            />
            {clicked &&
              (!news ? (
                <ActivityIndicator size="large" />
              ) : (
                <List
                  searchPhrase={searchPhrase}
                  data={news}
                  setClicked={setClicked}
                />
              ))}
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
            {news && <NewsTrending news={news[0]} />}
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
      </ScrollView>
    </SafeArea>
  );
};
