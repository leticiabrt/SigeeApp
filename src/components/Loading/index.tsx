import React from "react";
import LottieView from "lottie-react-native";

export function Loading() {
    return <LottieView
        source={require('../../lotties/animacao.json')}
        style = {{width: "100%", height: "100%"}}
        autoPlay
        loop
    />
}