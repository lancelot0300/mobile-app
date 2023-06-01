import { Tabs } from "expo-router";
import userIcon from "../../assets/userLogo.png";
import { Image, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import homeIcon from "../../assets/home-icon-2.png";
import lemonIcon from "../../assets/orange-lemon-icon.png";

export default () => {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#242424",
          border: 0,
          height: 100,
          borderTopColor: "#000",
          marginBottom: -20,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <>
              <Image source={homeIcon} style={{ width: 20, height: 20 }} />
              <Text style={{ color: color, fontSize: 16, textAlign: "center" }}>
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="Ingredients"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <>
              <Image source={lemonIcon} style={{ width: 20, height: 20 }} />
              <Text style={{ color: color, fontSize: 16, textAlign: "center" }}>
                Ingedients
              </Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ color }) => (
            <>
              <Image source={userIcon} style={{ width: 20, height: 20 }} />
              <Text style={{ color: color, fontSize: 16, textAlign: "center" }}>
                User
              </Text>
            </>
          ),
        }}
      />
    </Tabs>
  );
};
