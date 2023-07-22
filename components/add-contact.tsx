import { Web3Button } from "@thirdweb-dev/react-native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { CONTRACT_ADDRESS } from "../const/addresses";

export default function AddContact() {
    const [addContact, setAddContact] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    function reset() {
        setName("");
        setAddress("");
    };
    
    return(
        <View>
            {!addContact ? (
                <Button
                    onPress={() => setAddContact(true)}
                    title="+"
                />
            ) : (
                <View>
                    <Button
                        onPress={() => setAddContact(false)}
                        title="Close"
                    />
                    <Text>Add a contact</Text>
                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={(e) => setName(e)}
                    />
                    <TextInput
                        placeholder="0x0000"
                        value={address}
                        onChangeText={(e) => setAddress(e)}
                    />
                    <Web3Button
                        contractAddress={CONTRACT_ADDRESS}
                        action={(contract) => contract.call(
                            "addContact",
                            [
                                name,
                                address
                            ]
                        )}
                        onSuccess={() => {
                            reset();
                            setAddContact(false);
                        }}
                    >Add Contact</Web3Button>
                </View>
            )}
        </View>
    )
}