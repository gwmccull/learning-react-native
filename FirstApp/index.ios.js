'use strict';
import React, {
    AppRegistry,
    Component,
    Image,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const FirstApp = React.createClass({
    getInitialState() {
        return {
            // You may want to put stuff here.
            launchLock: false,
            launchButton: false
        }
    },

    onButtonPress() {
        if (this.state.launchLock) {
            this.setState({launchButton: !this.state.launchButton});
        } else {
            return false;
        }
    },

    onImagePress() {
        this.onButtonPress();
        this.setState({launchLock: false});
    },

    render() {
        if (!this.state.launchButton) {
            return (
                <View style={styles.container}>
                    <Text style={styles.h1}>
                        Launch Control
                    </Text>
                    <Switch onValueChange={(value) => this.setState({launchLock: value})}
                            value={this.state.launchLock} />
                    <TouchableOpacity onPress={this.onButtonPress}>
                        <Text style={this.state.launchLock ? styles.button : styles.disabledButton}>
                            Launch
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.imageContainer}>
                    <TouchableOpacity style={styles.image} onPress={this.onImagePress}>
                        <Image
                            style={styles.image}
                            source={{uri: 'https://s3.amazonaws.com/vigesharing-is-vigecaring/lkurtz/rnwksp-c4-launch.jpg'}}
                        />
                    </TouchableOpacity>
                </View>
            )
        }
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    h1: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        flex: 1
    },
    instructions: {
        marginTop: 10,
        textAlign: 'center',
    },
    button: {
        color: 'white',
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 7,
        marginTop: 20
    },
    disabledButton: {
        color: '#333',
        backgroundColor: 'gray',
        padding: 15,
        borderRadius: 7,
        marginTop: 20
    }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);