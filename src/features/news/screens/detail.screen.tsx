import React, { useState, useEffect } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Pressable, ScrollView } from "react-native";
import { Moment } from "../../../components/utility/moment.component";
import {
  Container,
  Row,
  Column,
  ImageView,
  ChannelContainer,
  LikeCommentContainer,
  ButtonContainer,
  ButtonView,
  ImageBackground,
  Footer,
} from "../components/detail.style";
import { useGetPostQuery, useToggleBookmarkMutation } from "../../../redux/api";

export const DetailNews = ({ route, navigation }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const { id } = route.params;
  const { data, isLoading } = useGetPostQuery(id);
  const [toggleBookmark] = useToggleBookmarkMutation();

  if (isLoading) return null;
  const { title, content, category, image, created_at, userInfo } = data;

  // Toggle bookmark
  const handleBookmark = async () => {
    const response = await toggleBookmark(id);
    if (response.data.status === "success") {
      setBookmarked(!bookmarked);
    }
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row>
          <Pressable onPress={() => navigation.goBack()}>
            <IonIcons name="arrow-back" size={24} />
          </Pressable>
          <Row>
            <Spacer position="right" size="medium">
              <IonIcons name="share-social-outline" size={20} />
            </Spacer>
            <IonIcons name="ellipsis-vertical-outline" size={20} />
          </Row>
        </Row>
        <Spacer position="top" size="large">
          <Row>
            <ChannelContainer>
              <ImageView
                source={{
                  uri: userInfo.avatar,
                }}
              />
              <Spacer position="left" size="small">
                <Column>
                  <Text variant="label">{userInfo.name}</Text>
                  <Text variant="timeText">
                    <Moment time={created_at} />
                  </Text>
                </Column>
              </Spacer>
            </ChannelContainer>
            <ButtonContainer>
              <ButtonView>
                <Text variant="buttonText">Following</Text>
              </ButtonView>
            </ButtonContainer>
          </Row>
        </Spacer>
        <Spacer position="top" size="medium">
          <ImageBackground
            source={{
              uri: image,
            }}
          />
        </Spacer>
        <Spacer position="top" size="small">
          <Text variant="caption">{category.name}</Text>
        </Spacer>
        <Spacer position="top" size="tiny">
          <Text variant="title">{title}</Text>
        </Spacer>
        <Spacer position="top" size="medium">
          <Text variant="body">{content}</Text>
        </Spacer>
      </ScrollView>
      <Footer>
        <Row>
          <LikeCommentContainer>
            <Row>
              <Pressable onPress={() => setLiked(!liked)}>
                <IonIcons
                  name={liked ? "heart" : "heart-outline"}
                  size={20}
                  style={{ color: "red" }}
                />
              </Pressable>

              <Spacer position="left" size="tiny" />
              <Text variant="caption">24.5k</Text>
            </Row>
            <Spacer position="left" size="large" />
            <Pressable onPress={() => navigation.navigate("CommentScreen")}>
              <Row>
                <IonIcons name="chatbox-ellipses-outline" size={20} />
                <Spacer position="left" size="tiny" />
                <Text variant="caption">1k</Text>
              </Row>
            </Pressable>
          </LikeCommentContainer>
          <Pressable onPress={handleBookmark}>
            <IonIcons
              name={bookmarked ? "bookmark" : "bookmark-outline"}
              size={20}
              style={{ color: "#1877F2" }}
            />
          </Pressable>
        </Row>
      </Footer>
    </Container>
  );
};
