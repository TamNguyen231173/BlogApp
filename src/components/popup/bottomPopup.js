import {
  Modal,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

export class BottomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  open() {
    this.setState({ visible: true });
  }

  close() {
    this.setState({ visible: false });
  }

  render() {
    const { children, onTouchOutside } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.visible}
        onRequestClose={() => {
          this.close();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => this.close()}
              style={styles.hideModalButton}
            >
              <Text style={styles.hideModalText}>Hide Modal</Text>
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  hideModalButton: {},
  hideModalText: {
    color: "red",
    fontSize: 20,
  },
});
