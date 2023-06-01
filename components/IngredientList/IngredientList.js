import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";


export const IngredientList = ({ activeIngredient, setActive }) => {

  return (
    <View style={{ height: 60 }}>
      { activeIngredient ?
        Object.keys(activeIngredient).length > 0 && 
        <FlatList
          data={Object.keys(activeIngredient)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#121212",
                padding: 10,
                margin: 10,
                borderRadius: 18,
                minWidth: 50,
                borderWidth: 1,
                height: 40,
                borderColor: activeIngredient[item]
                  ? "#f954ba"
                  : "rgba(255,255,255,0.25)",
              }}
              onPress={() => {
                setActive({
                  ...activeIngredient,
                  [item]: !activeIngredient[item],
                });
              }}
            >
              <Text
                style={{
                  color: activeIngredient[item] ? "#f954ba" : "#fff",
                  textAlign: "center",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal={true}
        />
        : <Text>Loading</Text>
        }
    </View>
  );
};
