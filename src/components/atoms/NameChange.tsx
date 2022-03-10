import { useCallback } from "react";
import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";

const NameChange: React.FC = () => {
    const [name, setName] = useState("Nikola");
    const handleNameChange = useCallback(() => {
        setName((currName) => {
            if (currName === "Nikola") return "Marko";

            return "Nikola";
        });
    }, []);

    return (
        <>
            <Text style={styles.textName}>{name}</Text>
            <Button title="Change state" onPress={handleNameChange} />
        </>
    );
};

const styles = StyleSheet.create({
    textName: {
        fontSize: 20
    }
});

export default NameChange;
