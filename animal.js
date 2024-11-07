import { View, Text, Image, StyleSheet } from 'react-native';

const Animal = ({ picture }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    source={picture}
                    style={styles.image}
                />
                <Text style={styles.question}>What animal is this?</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    box: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 350,
        height: 250,
        borderWidth: 2,
        borderColor: 'black',
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
