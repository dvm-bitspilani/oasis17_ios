import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  static navigationOptions = {
    title: "Oasis 2017"
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('./logo.png')} />
        <Text style={styles.smallText}>Ab ki Baar iOS par bhi</Text>
        <Button style={styles.smallText} onPress={()=>navigate('Demo')} title="Click Here" /> 
      </View>
    );
  }
}

class DemoScreen extends React.Component {
  static navigationOptions = {
    title: "Demo Screen"
  }
  render() {
    return(
      <Text>This is a Demo Screen.</Text>
    );
  }
}

const MainApp = StackNavigator({
  Home: { screen: Home },
  Demo: { screen: DemoScreen }
}); 

export default class App extends React.Component {
  render() {
    return <MainApp />;
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  bigText: {
    fontSize: 35  
  },  
  smallText: {
    fontSize: 15  
  }
});
