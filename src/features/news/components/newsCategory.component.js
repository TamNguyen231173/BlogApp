import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View } from "react-native";
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

export const NewsCategory = ({ news = {} }) => {
  const {
    source = { name: "News Name" },
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    urlToImage = "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/L2YBWTMIHRGDLIJUR74ZUFNFII.jpg&w=1440",

    url = "",
    publishedAt = "2010-11-12T13:14:15Z",
    title = "News Title",
    content = "News Content",
    author = "News Author",
    channelLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAwFBMVEUAAAD///+vDVv/TJjcKHhgYGAtLS0iAxHQJXHqKoBTDiwJCQn19fXFxcVMTEz/TpwfHx/u7u4RERFHR0fGI2y1DV63t7dycnIzMzO+vr7k5OSQkJClpaVaWlonJyefn5/Y2Nhqamr1SpR0IkU3DyDqRo2qM2ZmHjxBEybXQYILAAPOzs5+fn6Hh4c6Ojqurq64N26cLl5NFi0dBxCQKlbGO3daGjVCCiMsCxl/JUx9CUFqCjeZC082AxuPEUxbBi/tPT2+AAADOElEQVRoge3YbVeiQBQH8Css0hoygosWSqWVm9oWZfagpt//W+3Fp2XGIel4mc6e5v+iF9dTP5g7cyEBdHR0dHR0dHS+NmU+J8dYqwnFGtaOT4TiYawfOlxKLhKnfM05xYupl/haWDvM9Up8Ercq1KpLl4/3H7thAzMU3HusVT3RDRut9gWVW8WtBNB0OBdrPpRD3m0tf2lI5rY8z4UL3o087xxanNuGs0YYntO556VSU3St9Qf/XKcOQ8r+VqHetFa3lnLPms1a3Um7Ibik+6oKJ1Hk14X7rUXRnd8u1sXlHEJT6C8urAtp1yv7Ia3bTn4ILvYXN5uT3le3EIUlZxiSueUIvSrv+m5Uhj/cfsbr8Ot30CByh5ZldVohv6+wZt2eCnPDue9YVtshctP5DvM5j+sKtQNdsPh0kj/nCkW8Fqh1hOLxYa6OznfI769h31h88wXsoGuy7sNAudtjpmmy6zfF7I25Cus/KnXHbAOzeKSOvdywidx9UtXmUT/lJot9qcZ94thkscfPCtira8FNFrt3Vbgb77CrNhftPnRlMLaZenSOgl/bHL0AvMZMests/Erq2kc/tvlZSSo3ffkts16xLh7hjMXuEo5OmYsjWiozwjbLXXiM5bJJ9YTMcPHZ35dvMKLRmenC6Gl3hiyPVMEuftaT3DKjafFHLp6psSizMQm7x8U2i4tNNKv3ufiESu9s9kDD5nDBjs2tfE3E5nHxNG/azMgmVi4XR+eyzaxPxeZ1wU6ekIzu1SOvi2cqZjEZ+wkX4JnwEfwZlzKfcd8JX+Pzu/YkmKt3B1MjMIwX1W5lhqphzNS673NjlWCh0LUnRrB26W54v7uYbVW84akit5JWk7yrcO25oBrBpHh3MA1EFmGas/SBuxCXeOXOin2ffJGquLOnRbrbE7vTXqJnktydZqgzskEpc3fOzmaJyaaVzM1s7ITy2yzx//30UOQyJxoY8izkajAr+FVkZz6tlphqKmfmVaIGpI3NyGJnIBfb2E0G/G4mPLF7UuEbq+5r99TWmtjKVBzNG1XZEq8zDZaNJRyK+TJYDkWVS7zOIpjTfgmaN0pOrI6Ojo6Ojo7OAfkLdotYmm926AwAAAAASUVORK5CYII=",
  } = news;

  return (
    <Spacer position="top" size="large">
      <NewsCard mode="none">
        <Row>
          <Spacer position="right" size="small">
            <NewsCardCover
              source={{ uri: urlToImage }}
              style={{ width: 96, height: 100 }}
            />
          </Spacer>
          <BodyContainer>
            <Text variant="timeText">{author}</Text>
            <Spacer position="top" size="small">
              <NavigateButton screenName={"DetailNews"} news={news}>
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
                  <ChannelContainer>
                    <ImageView source={{ uri: channelLogo }} />
                    <Spacer position="left" size="tiny" />
                    <Text variant="smallText">{source.name}</Text>
                  </ChannelContainer>
                  <Spacer position="left" size="medium" />
                  <TimeContainer>
                    <Ionicons name="time-outline" size={12} />
                    <Spacer position="left" size="tiny" />
                    <Text variant="timeText">
                      <Moment time={publishedAt} />
                    </Text>
                  </TimeContainer>
                </Row>
                <Ionicons name="ellipsis-horizontal-outline" size={24} />
              </Row>
            </Spacer>
          </BodyContainer>
        </Row>
      </NewsCard>
    </Spacer>
  );
};
