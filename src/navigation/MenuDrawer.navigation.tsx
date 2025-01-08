import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Noticias, Checkins, Perfil, Reservas, Times, Cronograma } from '../screens';
import { styles } from "./styles";
import { colors } from '../styles/globalstyles'
import { Image } from 'react-native';
import { useAuth } from '../hook/auth';
import { MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

type MenuDrawerParam = {
    Noticias: undefined
    Checkins: undefined
    Perfil: undefined
    Reservas: undefined
    Times: undefined
    Cronograma: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Noticias">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}




export function MenuDrawer() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    const { user } = useAuth()
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: colors.primary },
                headerTitle: () => <Image style={styles.cabecalho} source={require('../assets/cabecalho.png')} />,
                drawerContentStyle: { backgroundColor: colors.primary }
            }} >
            <Drawer.Screen options={{
                drawerIcon: ({ color, size }) => (
                    <Entypo name="paper-plane" size={size} color={color} />
                ),
            }} name="Noticias" component={Noticias} />

            <Drawer.Screen options={{
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="person" size={size} color={color} />
                ),
            }} name="Perfil" component={Perfil} />

            {user?.data.tipo == 'Aluno' &&
                <>
                    <Drawer.Screen options={{
                        drawerIcon: ({ color, size }) => (
                            <MaterialIcons name="sports-soccer" size={size} color={color} />
                        ),
                    }} name="Times" component={Times} />
                </>
            }

            <Drawer.Screen options={{
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="check" size={size} color={color} />
                ),
            }} name="Checkins" component={Checkins} />

            <Drawer.Screen options={{
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="list" size={size} color={color} />
                ),
            }} name="Reservas" component={Reservas} />

            <Drawer.Screen options={{
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="access-alarms" size={size} color={color} />
                ),
            }} name="Cronograma" component={Cronograma} />
        </Drawer.Navigator>

    );
}

