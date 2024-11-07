import { View, Text, Image, StyleSheet } from 'react-native';

const Animal = ({ picture }) => {
    return (
        <View style={styles.container}>
            <Image
                source={picture}
                style={styles.image}
            />
            <Text style={styles.question}>What animal is this?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
});

export default Animal;
