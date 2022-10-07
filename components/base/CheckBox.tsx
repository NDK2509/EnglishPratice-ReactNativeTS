import React from "react"
import { Text, Touchable, TouchableOpacity, View } from "react-native"
import COLORS from "../../utils/colors"

interface CallBack {
    (): void
}
interface CheckBoxProps {
    width: number,
    value: boolean,
    onChange?: CallBack
}
const CheckBox = ({width, value, onChange}: CheckBoxProps) => {
    return (
        <TouchableOpacity onPress={onChange} style={{height: width, width: width, backgroundColor: value ? COLORS.white : "transparent", borderWidth: 1, borderColor: COLORS.white}}>
            {value&&<View><Text>+</Text></View>}
        </TouchableOpacity>
    )
}
export default CheckBox