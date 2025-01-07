import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import {Inicio} from "../screens/index"

type MenuStackParam = {
    Login: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Login">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function LoginStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true,
            headerShown: false
        }}>
           <Stack.Screen options={{
            headerTitle: ""
           }} name="Login" component={Inicio}/>
        </Stack.Navigator>
    )
}