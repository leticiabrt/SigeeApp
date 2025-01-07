import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles"

interface IButton extends TouchableOpacityProps{
    onPressI: () => void
    cor: boolean,
    title: string
}

export function ButtonSlide({title, onPressI, cor}: IButton){
    return(
        <TouchableOpacity style={cor ? styles.ballCor : styles.ball } onPress={onPressI} >
            <Text style={cor ? styles.buttonText : styles.buttonTextI}>{title}</Text>
        </TouchableOpacity>
    )
}