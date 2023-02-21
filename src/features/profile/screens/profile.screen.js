import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import settings from "../../../../assets/settings";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
import { TabsView } from "../../../components/utility/tabsView.component";
import { NewsContext } from "../../../services/news/news.context";
import {
  Container,
  Header,
  Avatar,
  HeaderText,
  SvgContainer,
  Row,
  Col2,
  FollowContainer,
  AddButton,
} from "../components/profile.style";
import { SvgXml } from "react-native-svg";
import add from "../../../../assets/add";
import { Pressable } from "react-native";

const tabs = ["news", "recent"];

export const ProfileScreen = ({ navigation }) => {
  const { infoUser } = useContext(NewsContext);

  return (
    <SafeArea>
      <Container>
        <Header>
          <View></View>
          <HeaderText variant="textBodyBlack">Profile</HeaderText>
          <Pressable onPress={() => navigation.navigate("SettingScreen")}>
            <SvgContainer xml={settings} width={19} height={22} />
          </Pressable>
        </Header>
        <Row>
          <Avatar source={{ uri: infoUser.avatar }} />
          <Row style={{ width: "65%" }}>
            <FollowContainer>
              <Text variant="amount">2156</Text>
              <Text variant="body">Followers</Text>
            </FollowContainer>
            <FollowContainer>
              <Text variant="amount">23</Text>
              <Text variant="body">Following</Text>
            </FollowContainer>
            <FollowContainer>
              <Text variant="amount">567</Text>
              <Text variant="body">News</Text>
            </FollowContainer>
          </Row>
        </Row>
        <Spacer position="top" size="medium">
          <Text variant="amount">{infoUser.name}</Text>
          <Text variant="body">{infoUser.address}</Text>
        </Spacer>
        <Spacer position="top" size="medium">
          <Row>
            <Col2>
              <ButtonPrimary onPress={() => navigation.navigate("EditProfile")}>
                <Text variant="buttonText">Edit profile</Text>
              </ButtonPrimary>
            </Col2>
            <Col2>
              <ButtonPrimary
                onPress={() => navigation.navigate("SearchFilter")}
              >
                <Text variant="buttonText">Website</Text>
              </ButtonPrimary>
            </Col2>
          </Row>
        </Spacer>
        <Spacer position="top" size="medium">
          <Row>
            <TabsView tabs={tabs} />
          </Row>
        </Spacer>
        <AddButton onPress={() => navigation.navigate("CreateNews")}>
          <SvgXml xml={add} width={24} height={24} />
        </AddButton>
      </Container>
    </SafeArea>
  );
};
