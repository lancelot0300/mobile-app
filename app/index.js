import {  useRouter } from "expo-router";
import { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { signin } from "../store/authSlices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLogged = async () => {
    try {
      const value = await AsyncStorage.getItem("keepLogin");

      if (value === "true") {
        dispatch(signin());
        router.replace("/Home");
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

  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
};
export default App;
