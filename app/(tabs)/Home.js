import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { NameInput } from "../../components/NameInput/NameInput";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { signin } from "../../store/authSlices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetch from "../../hooks/useFetch";
import ReciptList from "../../components/ReciptList/ReciptList";
import DrinkPopup from "../../components/DrinkPopup/DrinkPopup";


const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [drinkName, setDrinkName] = useState("");
  const { data, fetchData } = useFetch();
  const [drink, setDrink] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handlePress = async () => {

    if(drinkName === "") return alert("Please enter a drink name");

    await fetchData(`name=${drinkName}`);
  };

  useEffect(() => {
    isLogged();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#121212", alignItems: "center", justifyContent: "center" }}
    >
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

      <Text style={{ color: "#fff", textAlign: "center", padding: 15 }}>
        By Name
      </Text>

      <NameInput
        placeholder="Search by name. etc: Margarita"
        value={drinkName}
        onChangeText={setDrinkName}
      />

      <TouchableOpacity  style={styles.submitButton} onPress={handlePress}>
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
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#121212",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  activeButton: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  submitButton: {
    minWidth: 100,
    backgroundColor: "#f954ba",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
};

export default Home;
