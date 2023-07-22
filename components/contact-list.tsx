import { useContract, useContractRead } from "@thirdweb-dev/react-native";
import { Text, View } from "react-native";
import { CONTRACT_ADDRESS } from "../const/addresses";
import ContactCard from "./contact-card";

export default function ContactList() {
    const {
        contract
    } = useContract(CONTRACT_ADDRESS);

    const {
        data: contacts,
        isLoading: isLoadingContacts
    } = useContractRead(
        contract,
        "getContacts",
    )
    return(
        <View>
            <Text>Contacts</Text>
            {!isLoadingContacts ? (
                contacts?.length > 0 ? (
                    contacts.map((contact: any, index: number) => (
                        <ContactCard
                            key={index}
                            name={contact.name}
                            wallet={contact.wallet}
                        />
                    ))
                ) : (
                    <Text>No contacts</Text>
                )
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    )
}