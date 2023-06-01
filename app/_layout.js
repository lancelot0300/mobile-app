import { store } from "../store/store";
import { Provider } from "react-redux";
import { Slot, Stack } from "expo-router";

export default function Root() {
  return (
    <Provider store={store}>
        <Stack >
          <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
    </Provider>
  );
};
