'use strict';
import React, {
    StatusBar,
    AppRegistry,
    Component,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

class FirstApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.title}>
                    Try this:
                </Text>
                <Image
                    style={styles.targetImage}
                    source={require('./resources/images/mind-blown.gif') }
                />
                <View style={styles.row}>
                    <Text style={styles.item}>
                        I'm on the <Text style={styles.blue}>left</Text>.
                    </Text>
                    <Text style={styles.item}>
                        I'm on the <Text style={styles.orange}>right</Text>.
                    </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252525',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    },
    row: {
        flexDirection: 'row'
    },
    item: {
        marginTop: 10,
        marginHorizontal: 30,
        textAlign: 'center',
        color: 'white'
    },
    blue: {
        color: '#06F'
    },
    orange: {
        color: 'orange'
    },
    targetImage: {
        width: 200,
        height: 200,
        marginTop: 25,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'black'
    }
});

AppRegistry.registerComponent('FirstApp', () => FirstApp);