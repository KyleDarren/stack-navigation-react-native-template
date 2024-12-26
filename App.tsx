import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1' screenOptions={{
            title: "My Home",
            headerStyle: { backgroundColor: "white" },
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Button title="Menu" onPress={() => alert("This is a menu")}/>
            ),
          }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}