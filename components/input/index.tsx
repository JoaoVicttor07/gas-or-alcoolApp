import { View, TextInput, TextInputProps } from "react-native";
import styles from './style'

interface InputProps extends TextInputProps {}

export default function Input(props: InputProps) {
    return (
        <View>
            <TextInput style={styles.input}
            {...props}
            />
        </View>
    )
}