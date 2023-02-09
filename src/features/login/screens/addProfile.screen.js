import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import camera from "../../../../assets/camera";
import { TextInputView } from "../../../components/utility/text-input.component";
import { Text } from "../../../components/typography/text.component";
import { ButtonPrimary } from "../../../components/utility/button.component";
import { ScrollView } from "react-native";

export const AddProfileScreen = ({ navigation }) => {
	return (
		<SafeArea>
			<ScrollView>
				<Container>
					<Body>
						<Title>Fill your Profile</Title>
						<Spacer position="top" size="large">
							<AddImageContainer>
								<ImageView
									source={{
										uri: "https://i0.wp.com/lalovelee.com/wp-content/uploads/2019/04/sample-avatar-003.jpg?fit=300%2C300&ssl=1",
									}}
								/>
								<CameraIcon
									width={30}
									height={30}
									xml={camera}
								/>
							</AddImageContainer>
						</Spacer>
						<FormContainer>
							<Spacer position="top" size="large">
								<InputContainer>
									<LabelText variant="caption">
										Username
									</LabelText>
									<TextInputView />
								</InputContainer>
							</Spacer>
							<Spacer position="top" size="large">
								<InputContainer>
									<LabelText variant="caption">
										Full Name
									</LabelText>
									<TextInputView />
								</InputContainer>
							</Spacer>
							<Spacer position="top" size="large">
								<InputContainer>
									<LabelText variant="caption">
										Email Address
									</LabelText>
									<TextInputView />
								</InputContainer>
							</Spacer>
							<Spacer position="top" size="large">
								<InputContainer>
									<LabelText variant="caption">
										Phone Number
									</LabelText>
									<TextInputView />
								</InputContainer>
							</Spacer>
						</FormContainer>
					</Body>
					<Footer>
						<ButtonContainer>
							<ButtonPrimary
								onPress={() => navigation.navigate("Main")}
							>
								<Text variant="buttonText">Next</Text>
							</ButtonPrimary>
						</ButtonContainer>
					</Footer>
				</Container>
			</ScrollView>
		</SafeArea>
	);
};
