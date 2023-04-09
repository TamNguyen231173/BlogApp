import React, { useContext } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import settings from "../../../../assets/settings";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
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
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/selector";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Recent } from "../components/recent.component";
import { News } from "../components/news.component";

const Tab = createMaterialTopTabNavigator();

const heightView = Dimensions.get("window").height;

export const ProfileScreen = ({ navigation }) => {
  const infoUser = useSelector(userSelector);

  if (!infoUser) {
    return null;
  }

  const HeaderView = () => {
    return (
      <Header>
        <View></View>
        <HeaderText variant="textBodyBlack">Profile</HeaderText>
        <Pressable onPress={() => navigation.navigate("SettingScreen")}>
          <SvgContainer xml={settings} width={19} height={22} />
        </Pressable>
      </Header>
    );
  };

  return (
    <SafeArea>
      <Container>
        <HeaderView />
        <Row>
          <Avatar
            source={{
              uri: infoUser.avatar,
            }}
          />
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
          <Text variant="amount">
            {infoUser.name} | {infoUser.role}
          </Text>
          <Text variant="body">{infoUser.email}</Text>
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
          <View
            style={{
              height: 500,
            }}
          >
            <Tab.Navigator>
              <Tab.Screen name="News" component={News} />
              <Tab.Screen name="Recent">
                {() => <Recent userId={infoUser._id} />}
              </Tab.Screen>
            </Tab.Navigator>
          </View>
        </Spacer>
      </Container>
      <AddButton onPress={() => navigation.navigate("CreateNews")}>
        <SvgXml xml={add} width={24} height={24} />
      </AddButton>
    </SafeArea>
  );
};
