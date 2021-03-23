import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navigation = this.props.navigation;

        return (
            <View style={styles.home}>
                <Text style={styles.text}>Bienvenido a la app.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ItemList')}>
                    <View style={styles.homeButton}>
                        <Text style={styles.textButton}>Entrar</Text>
                        <FontAwesomeIcon style={styles.textButton} icon={faSignInAlt} size={24} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: Colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors.dark,
        fontSize: 32,
    },
    textButton: {
        color: '#23AD91',
        fontSize: 24,
        padding: 5
    }
})

export default HomeScreen;