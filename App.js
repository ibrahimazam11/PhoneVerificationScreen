import React from 'react';
import { StyleSheet, View, ImageBackground, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Input } from 'native-base';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground
          source={require('./img/login_bg.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <Container style={styles.mainCard}>
            <View style={styles.header} >
              <Image
                source={require('./img/LOGO.png')}
                style={{ width: '85%', height: '100%', margin: 5 }}
              />
            </View>
            <Content>
              <Card style={{ borderRadius: 10 }}>
                <CardItem style={{ marginTop: 45 }}>
                  <Body>
                    <Text style={{ alignSelf: 'center', color: '#E53935', fontSize: 18, fontWeight: 'bold' }}>Phone Number Verification</Text>
                    <Text style={{ alignSelf: 'center', color: '#E53935', fontSize: 13 }}>Enter your Mobile Number below</Text>
                  </Body>
                </CardItem>
                <CardItem style={{ marginTop: -15 }}>
                  <Input placeholder="Mobile Number" underlineColorAndroid="#E53935">+92</Input>
                </CardItem>
                <CardItem style={{ backgroundColor: "#E53935", margin: 5, borderRadius: 8 }}>
                  <Body>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 16 }}>Enter your 6-Digit Code here</Text>
                    <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 11, fontStyle: 'italic' }}>as soon as you recieve</Text>
                    <Input style={{ backgroundColor: "#fff", width: '60%', height: 38, borderRadius: 10, alignSelf: 'center', fontSize: 14, marginTop: 5, textAlign: 'center' }} placeholder="-  -  -  -  -  -" />
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  mainCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    position: 'absolute'
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#E53935',
    height: 90,
    width: '80%',
    borderRadius: 8,
    position: 'absolute',
    top: 100,
    zIndex: 1
  }
});
