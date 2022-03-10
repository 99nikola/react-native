import { useCallback } from "react";
import { useState } from "react";
import { Button, Text } from "react-native";

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
            <Text>{name}</Text>
            <Button title="Change state" onPress={handleNameChange} />
        </>
    );
};

export default NameChange;
