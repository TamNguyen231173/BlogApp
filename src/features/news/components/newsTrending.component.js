import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import Ionicons from "react-native-vector-icons/Ionicons";
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

export const NewsTrending = ({ news = {} }) => {
  const {
    _id = "",
    logo = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    image = "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L2YBWTMIHRGDLIJUR74ZUFNFII.jpg&w=1440",
    created_at = "2023-01-30T11:02:00Z",
    title = "News Title",
    content = "News Content",
    userInfo = {},
    category = {},
  } = news;

  return (
    <NewsCard mode="none">
      <NewsCardCover source={{ uri: image }} />
      <BodyContainer>
        <Spacer position="top" size="small">
          <Text variant="timeText">{category.name}</Text>
        </Spacer>
        <NavigateButton screenName={"DetailNews"} id={_id}>
          <Spacer position="top" size="small">
            <Text variant="title">{title}</Text>
          </Spacer>
        </NavigateButton>
        <Spacer position="top" size="small">
          <Row>
            <Row>
              <ChannelContainer>
                <ImageView
                  source={{
                    uri: userInfo.avatar,
                  }}
                />
                <Spacer position="left" size="tiny" />
                <Text variant="smallText">{userInfo.name}</Text>
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
            <Ionicons name="ellipsis-horizontal-outline" size={24} />
          </Row>
        </Spacer>
      </BodyContainer>
    </NewsCard>
  );
};
