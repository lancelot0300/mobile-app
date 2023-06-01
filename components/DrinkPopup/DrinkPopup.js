import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import closeIcon from "../../assets/close-red-icon.png";
import drinkIcon from "../../assets/drink.png";


const DrinkPopup = ({ setModalVisible, modalVisible, drink }) => {
  return (
    <>
      {modalVisible && drink && (
        <SafeAreaView style={styles.centeredView}>
          <Modal animationType="fade" visible={modalVisible} transparent={true}>
            <SafeAreaView style={{ backgroundColor: "#121212" }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={{
                  backgroundColor: "#fff",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  alignSelf: "flex-end",
                  marginTop: 10,
                  marginRight: 10,
                }}
              >
                <Image style={styles.closeIcon} source={closeIcon} />
              </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.centeredView}>
              <Text style={styles.nameText}>{drink.name}</Text>
              <Image
                source={drinkIcon}
                style={{
                  width: 150,
                  height: 150,
                  alignSelf: "center",
                  marginBottom: 10,
                }}
              />
              <Text style={styles.headerText}>Ingredients:</Text>
              {drink.ingredients.map((ingredient, i) => (
                <Text key={i} style={styles.modalText}>
                  - {ingredient}
                </Text>
              ))}
              <Text style={styles.headerText}>Instructions:</Text>
              <Text style={styles.modalText}>{drink.instructions}</Text>
            </View>
          </Modal>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#121212",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  headerText: {
    fontSize: 24,
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  nameText: {
    fontSize: 30,
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  closeIcon: {
    width: 40,
    height: 40,
  },
});

export default DrinkPopup;
