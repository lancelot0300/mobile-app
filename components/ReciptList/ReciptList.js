import {
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import drinkIcon from "../../assets/drink.png";


const ReciptList = ({ data, setDrink, setModalVisible }) => {
  return (
    <>
      {data && data.length !== 0 && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                padding: 10,
                borderRadius: 10,
                margin: 10,
                borderColor: "#fff",
                height: 150,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setDrink(item);
                setModalVisible(true);
              }}
            >
              <Image
                source={drinkIcon}
                style={{
                  width: 70,
                  height: 70,
                  alignSelf: "center",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              />
              <Text style={{ color: "#fff", textAlign: "center" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.name + index}
          numColumns={2}
          key={"_"}
          style={{ flex: 1, width: "100%", height: "100%" }}
        />
      )}
    </>
  );
};

export default ReciptList;
