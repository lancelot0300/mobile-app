import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector , useDispatch } from "react-redux";
import { signin } from "../../store/authSlices/authSlice";
import { useEffect } from "react";

const User = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {user } = useSelector((state) => state.auth);

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

  const handlePress = async () => {
    await AsyncStorage.removeItem("keepLogin");
    router.replace("/login");
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
        <Text style={{ color: "#fff", textAlign: "center", padding: 15 }}>
            Welcome to the User Page
        </Text>

        <Text style={{ color: "#fff", textAlign: "center", padding: 15 }}>
            User: {user}
        </Text>

        <Text style={{ color: "#fff", textAlign: "center", padding: 15 }}>
            This is where you can logout
        </Text>

      <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
        <Text style={{ textAlign: "center" }}>Logout</Text>
      </TouchableOpacity>
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
export default User;
