import React from "react"
import { Touchable, TouchableOpacity } from "react-native"
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
        <TouchableOpacity style={{height: width, width: width, backgroundColor: COLORS.white}}>

        </TouchableOpacity>
    )
}
export default CheckBox