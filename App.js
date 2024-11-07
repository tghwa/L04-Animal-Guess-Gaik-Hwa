import React, { useState } from 'react';
import { Text, View, ScrollView, Button, Alert, StyleSheet } from 'react-native';
import Animal from './animal';
import RNPickerSelect from 'react-native-picker-select';

const Game = () => {
    let num = 0;
    const [selectedCrocodile, setCrocodile] = useState('');
    const [selectedDeer, setDeer] = useState('');
    const [selectedElephant, setElephant] = useState('');
    const [selectedGiraffe, setGiraffe] = useState('');
    const [selectedZebra, setZebra] = useState('');

    if (selectedCrocodile === 'Crocodile') {
        num = num + 1;
    }

    if (selectedDeer === 'Deer') {
        num = num + 1;
    }

    if (selectedElephant === 'Elephant') {
        num = num + 1;
    }

    if (selectedGiraffe === 'Giraffe') {
        num = num + 1;
    }

    if (selectedZebra === 'Zebra') {
        num = num + 1;
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Guess the Animal - Tan Gaik Hwa</Text>
                <Text style={styles.subtitle}>Select the correct animal for each picture:</Text>

                <Animal picture={require('./img/zebra.jpg')} />
                <RNPickerSelect
                    onValueChange={(value) => setZebra(value)}
                    items={[
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Elephant', value: 'Elephant' },
                        { label: 'Giraffe', value: 'Giraffe' },
                        { label: 'Zebra', value: 'Zebra' },
                    ]}



                />
                <Text></Text>
                <Animal picture={require('./img/giraffe.jpg')} />
                <RNPickerSelect
                    onValueChange={(value) => setGiraffe(value)}
                    items={[
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Elephant', value: 'Elephant' },
                        { label: 'Giraffe', value: 'Giraffe' },
                        { label: 'Zebra', value: 'Zebra' },
                    ]}

                />
                <Text></Text>
                <Animal picture={require('./img/elephant.jpg')} />
                <RNPickerSelect
                    onValueChange={(value) => setElephant(value)}
                    items={[
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Elephant', value: 'Elephant' },
                        { label: 'Giraffe', value: 'Giraffe' },
                        { label: 'Zebra', value: 'Zebra' },
                    ]}

                />
                <Text></Text>
                <Animal picture={require('./img/deer.jpg')} />
                <RNPickerSelect
                    onValueChange={(value) => setDeer(value)}
                    items={[
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Elephant', value: 'Elephant' },
                        { label: 'Giraffe', value: 'Giraffe' },
                        { label: 'Zebra', value: 'Zebra' },
                    ]}

                />
                <Text></Text>
                <Animal picture={require('./img/crocodile.jpg')} />
                <RNPickerSelect
                    onValueChange={(value) => setCrocodile(value)}
                    items={[
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Elephant', value: 'Elephant' },
                        { label: 'Giraffe', value: 'Giraffe' },
                        { label: 'Zebra', value: 'Zebra' },
                    ]}
                />

                <Button title="Submit" onPress={() => Alert.alert(`You've got ${num} out of 5 correct.`)} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        padding: 10,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
    },

});


export default Game;
