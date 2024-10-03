import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerStyle: { backgroundColor: "#eee" } }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{
              title: "Review Details",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
