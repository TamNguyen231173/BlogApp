import React, { useState } from "react";
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

export const DetailNews = ({ route }) => {
	const [liked, setLiked] = useState(false);
	const [bookmarked, setBookmarked] = useState(false);

	const {
		source = { name: "BBC News" },
		title = "Title News",
		author = "Author News",
		urlToImage = "https://anhdepfree.com/wp-content/uploads/2022/11/background-2d-dep-cho-photoshop_63710488652.jpg",
		content = "Content News",
		publishedAt = "2021-10-10T10:10:10Z",
	} = route.params.news;

	return (
		<Container>
			<ScrollView>
				<Row>
					<IonIcons name="arrow-back" size={24} />
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
									uri: urlToImage,
								}}
							/>
							<Spacer position="left" size="small">
								<Column>
									<Text variant="label">{source.name}</Text>
									<Text variant="timeText">
										<Moment time={publishedAt} />
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
							uri: urlToImage,
						}}
					/>
				</Spacer>
				<Spacer position="top" size="small">
					<Text variant="caption">{author}</Text>
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
						<Row>
							<IonIcons
								name="chatbox-ellipses-outline"
								size={20}
							/>
							<Spacer position="left" size="tiny" />
							<Text variant="caption">1k</Text>
						</Row>
					</LikeCommentContainer>
					<Pressable onPress={() => setBookmarked(!bookmarked)}>
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
