import { StyleSheet } from "react-native";
import {colors} from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    ball: {
        flex: 1,
        backgroundColor: colors.primary,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    ballCor: {
        flex: 1,
        backgroundColor: colors.secondary,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: colors.white,
        fontSize: 16,
    },

    buttonTextI: {
        color: colors.black,
        fontSize: 16,
    }
})