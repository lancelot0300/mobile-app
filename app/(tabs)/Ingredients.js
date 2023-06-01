import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { IngredientList } from "../../components/IngredientList/IngredientList";
import ReciptList from "../../components/ReciptList/ReciptList";
import useFetch from "../../hooks/useFetch";
import DrinkPopup from "../../components/DrinkPopup/DrinkPopup";
import { useDispatch } from "react-redux";
import { signin } from "../../store/authSlices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Ingredients = () => {
  const { data, fetchData } = useFetch();
  const [drink, setDrink] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const isLogged = async () => {
    try {
      const value = await AsyncStorage.getItem("keepLogin");
      if (value === "true") {
        dispatch(signin());
      } else {
        router.replace("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isLogged();
  }, []);

  const [activeIngredient, setActive] = useState({
    vodka: false,
    rum: false,
    tequila: false,
    gin: false,
    whiskey: false,
    bourbon: false,
    brandy: false,
    champagne: false,
    "red wine": false,
    "white wine": false,
    beer: false,
    vermouth: false,
    "triple sec": false,
    cognac: false,
    "soda water": false,
    "tonic water": false,
    "orange juice": false,
    "cranberry juice": false,
    "lime juice": false,
    "grenadine syrup": false,
  });

  const handlePress = async () => {
    if (!Object.values(activeIngredient).includes(true))
      return alert("Please select at least one ingredient");

    const query = Object.keys(activeIngredient).filter(
      (item) => activeIngredient[item]
    );
    await fetchData(`ingredients=${query.join(", ")}`);
  };

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        backgroundColor: "#121212",
        height: "100%",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            padding: 15,
            fontSize: 22,
          }}
        >
          Find Your Favorite Drink
        </Text>
      </View>

      <Text style={{ color: "#fff", textAlign: "center", padding: 15 }}>
        By Most Popular Ingedients
      </Text>

      <IngredientList
        activeIngredient={activeIngredient}
        setActive={setActive}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
        <Text style={{ textAlign: "center" }}>Find</Text>
      </TouchableOpacity>

      <ReciptList
        data={data}
        setDrink={setDrink}
        setModalVisible={setModalVisible}
      />

      <DrinkPopup
        drink={drink}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
};

const styles = {
  submitButton: {
    minWidth: 100,
    backgroundColor: "#f954ba",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
};

export default Ingredients;
