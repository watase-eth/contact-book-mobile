import { Text, View } from "react-native";

type Props = {
    name: string;
    wallet: string;
};

export default function ContactCard(props: Props) {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.wallet}</Text>
        </View>
    )
}