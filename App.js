import React from 'react';
import { StyleSheet, View, ImageBackground, Image, ScrollView, TextInput } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Button, Icon } from 'native-base';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground
          source={require('./img/login_bg.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <View style={styles.header} >
              <Image
                source={require('./img/LOGO.png')}
                style={{ width: '85%', height: '100%', margin: 5 }}
              />
            </View>
            <View style={{ width: '80%', height: 293, top: '-8%', zIndex: 0 }}>
              <Card style={{ borderRadius: 10 }}>
                <CardItem style={{ marginTop: 45 }}>
                  <Body>
                    <Text style={{ alignSelf: 'center', color: '#E53935', fontSize: 18, fontWeight: 'bold' }}>Phone Number Verification</Text>
                    <Text style={{ alignSelf: 'center', color: '#E53935', fontSize: 13 }}>Enter your Mobile Number below</Text>
                  </Body>
                </CardItem>
                <CardItem style={{ marginTop: -15 }}>
                  <TextInput placeholder="Mobile Number" underlineColorAndroid="#E53935" style={{width: '80%'}}>+92</TextInput>
                  <Button rounded style={{ backgroundColor: "#E53935" }}><Icon name='md-arrow-forward' /></Button>
                </CardItem>
                <CardItem style={{ backgroundColor: "#E53935", margin: 5, borderRadius: 8 }}>
                  <Body>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>Enter your 6-Digit Code here</Text>
                    <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 11, fontStyle: 'italic' }}>as soon as you recieve</Text>
                    <TextInput underlineColorAndroid="transparent" style={{ backgroundColor: "#fff", width: '60%', height: 36, borderRadius: 10, alignSelf: 'center', fontSize: 14, marginTop: 7, textAlign: 'center', color:"black" }} placeholder="-  -  -  -  -  -" />
                  </Body>
                </CardItem>
              </Card>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
  mainCard: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#E53935',
    height: 90,
    width: '65%',
    borderRadius: 8,
    zIndex: 1
  }
});