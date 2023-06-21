import React, { createRef } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ToastAndroid, TouchableOpacity, View } from "react-native";
import {
  NewsCard,
  NewsCardCover,
  Row,
  BodyContainer,
  ChannelContainer,
  ImageView,
  TimeContainer,
} from "./newsCard.style";
import { Moment } from "../../../components/utility/moment.component";
import { NavigateButton } from "../../../components/utility/navigate-button.component";
import { BottomPopup } from "../../../components/popup/bottomPopup";
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/selector";
import { useDeletePostMutation } from "../../../redux/api";
import { useNavigation } from "@react-navigation/native";

const ButtonMenu = styled.TouchableOpacity`
  margin-top: 8px;
`;

const TextButtonMenu = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

interface NewsCategoryProps {
  _id: string;
  image: string;
  created_at: string;
  title: string;
  userInfo: {
    _id: string;
  };
  category: {};
}

export const NewsCategory = (props: NewsCategoryProps) => {
  const navigation = useNavigation();
  const user = useSelector(userSelector);
  const { _id, image, created_at, title, userInfo, category } = props;
  let popupRef = createRef();
  if (!user) return null;
  const checkUser = user._id === userInfo?._id;
  const [deletePost] = useDeletePostMutation();

  // Show Popup Handler
  const onShowPopup = () => {
    popupRef.open();
  };

  // Hidden Popup Handler
  const onHiddenPopup = () => {
    popupRef.close();
  };

  // Update Post Handler
  const updatePostHandler = () => {
    navigation.navigate("UpdatePost", { id: _id });
  };

  // Delete Post Handler
  const deletePostHandler = async () => {
    const response = await deletePost(_id);
    if (response.status === 200) {
      console.log("response: ", "Delete Post Success");
      ToastAndroid.show("Delete Post Success", ToastAndroid.SHORT);
      onHiddenPopup();
    }
  };

  return (
    <Spacer position="top" size="large">
      <NewsCard mode="none">
        <Row>
          <Spacer position="right" size="small">
            <NewsCardCover
              source={{ uri: image }}
              style={{ width: 96, height: 100 }}
            />
          </Spacer>
          <BodyContainer>
            <Text variant="timeText">{category?.name}</Text>
            <Spacer position="top" size="small">
              <NavigateButton screenName={"DetailNews"} id={_id}>
                <View style={{ width: 260 }}>
                  <Text numberOfLines={2} ellipsizeMode="tail" variant="title">
                    {title}
                  </Text>
                </View>
              </NavigateButton>
            </Spacer>
            <Spacer position="top" size="small">
              <Row>
                <Row>
                  {/* Info User */}
                  <ChannelContainer>
                    <ImageView source={{ uri: userInfo?.avatar }} />
                    <Spacer position="left" size="tiny" />
                    <Text variant="smallText">{userInfo?.name}</Text>
                  </ChannelContainer>
                  <Spacer position="left" size="medium" />
                  <TimeContainer>
                    <Ionicons name="time-outline" size={12} />
                    <Spacer position="left" size="tiny" />
                    <Text variant="timeText">
                      <Moment time={created_at} />
                    </Text>
                  </TimeContainer>
                </Row>

                {/* Menu */}
                <TouchableOpacity onPress={onShowPopup}>
                  <Ionicons name="ellipsis-horizontal-outline" size={24} />
                </TouchableOpacity>

                {/* Popup Menu */}

                <BottomPopup
                  ref={(target) => (popupRef = target)}
                  onTouchOutside={onHiddenPopup}
                >
                  {checkUser && (
                    <>
                      <ButtonMenu>
                        <TextButtonMenu onPress={updatePostHandler}>
                          Edit Post
                        </TextButtonMenu>
                      </ButtonMenu>
                      <ButtonMenu onPress={deletePostHandler}>
                        <TextButtonMenu>Delete Post</TextButtonMenu>
                      </ButtonMenu>
                    </>
                  )}
                </BottomPopup>
              </Row>
            </Spacer>
          </BodyContainer>
        </Row>
      </NewsCard>
    </Spacer>
  );
};
