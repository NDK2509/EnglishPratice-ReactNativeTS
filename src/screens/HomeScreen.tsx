import { useNavigation } from "@react-navigation/native"
import { Button, Text, View } from "react-native"

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Hello, this is home screen</Text>
            <Button title="Word list" onPress={() => navigation.navigate("WordList" as never)}/>
        </View>
    )
}
export default HomeScreen