import { View, Text, Image } from 'react-native';


const Animal = ({ picture }) => {
    return (
        <View>
            <Image
                source={picture}
                style={{ width: 400, height: 300 }}
            />
            <Text style={{ fontSize: 20, color: 'grey' }}>What animal is this?</Text>

            <Text></Text>
        </View>
    );
};

export default Animal;
