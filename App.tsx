import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from 'navigation/DrawerNav';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        hidden={false}
      />
      <DrawerNav />
    </NavigationContainer >
  );
}
