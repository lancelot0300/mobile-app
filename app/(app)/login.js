import React, {useEffect, useState} from 'react';
import { useRouter, Stack, useRootNavigationState } from "expo-router";
import { SafeAreaView, View, Text, Button } from "react-native";
import CustomInput from '../../components/CustomInput/CustomInput'
import loginLogo from '../../assets/userLogo.png'
import passLogo from '../../assets/passLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../../store/authSlices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  
    const dispatch = useDispatch()
    const {user, initialized} = useSelector((state) => state.auth)
    const navigationState = useRootNavigationState();
    const router = useRouter();


  const [login, onChangeLogin] = useState("");
  const [password, onChangePass] = useState(""); 

  const handleLogin = () => {
    if (login === "admin" && password === "admin") {
      AsyncStorage.setItem("keepLogin", "true");
      dispatch(signin())
      router.replace("/Home");
    } else {
      alert("Wrong login or password");
    }
  }

  const getData = async () => {

    try {
      const value = await AsyncStorage.getItem("keepLogin");
      if (value === "true") {
        dispatch(signin());
        router.replace("/Home");
      }
    } catch (error) { 
      console.log(error);

    }
  };

  useEffect(() => {

   getData()

    
  }, [navigationState]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(0,0,0)" },
          headerShadowVisible: false,
          headerTitleStyle: { color: "#fff" },
          title: "",
          headerShown: false,
        }}
      ></Stack.Screen>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white", fontSize: 25, marginBottom: 15 }}>
          Login
        </Text>

        <CustomInput
          placeholder="Login"
          value={login}
          onChangeText={onChangeLogin}
          img={loginLogo}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={onChangePass}
          secureTextEntry={true}
          img={passLogo}
        />
      
        <Button title="Log in" onPress={handleLogin} testID='loginBtn' />
      </View>

    </SafeAreaView>
  );
};
export default Login;
