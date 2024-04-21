import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer'

// App Screens
import Home from 'screens/Home'
import Chat from 'screens/Chat'

const Drawer = createDrawerNavigator()

export default function DrawerNav() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#161622'
                }
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Chat" component={Chat} />
        </Drawer.Navigator>
    )
}