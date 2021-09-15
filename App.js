/* eslint-disable react-native/no-inline-styles */
import {tsTypeParameterInstantiation} from '@babel/types';
import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  ToastAndroid,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedNav: 0,
      isPress: true,
      shoesName: [
        {
          namaBarang: 'Nike Wearallday',
        },
        {
          namaBarang: 'Nike Air Max 2021',
        },
        {
          namaBarang: 'Nike Air Max 270',
        },
      ],

      count: 0,
    };
  }

  setBulletIndex = event => {
    //find the width
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    //get current position
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.ceil(contentOffset / viewSize);
    this.setState({selectedIndex});
  };

  render() {
    const {selectedIndex} = this.state;

    return (
      <View style={{flex: 1}}>
        {this.state.selectedNav === 0 ? (
          <View style={{flex: 1}}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <View style={{position: 'absolute'}}>
              <Image source={require('./src/images/BG.jpg')} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                margin: 20,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => this.setState({isPress: !this.state.isPress})}>
                {this.state.isPress === true ? (
                  <Image
                    source={require('./src/images/BMIcon.png')}
                    style={{width: 25, height: 25}}
                  />
                ) : (
                  <Image
                    source={require('./src/images/XIcon.png')}
                    style={{width: 25, height: 25}}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('x')}>
                <Image
                  source={require('./src/images/CartIcon.png')}
                  style={{
                    alignSelf: 'flex-end',
                    width: 30,
                    height: 30,
                  }}
                />

                <Text style={styles.CartNotif}>{this.state.count}</Text>
              </TouchableOpacity>
            </View>

            <Text style={{fontSize: 18, marginLeft: 20, fontWeight: '900'}}>
              Nike App Store
            </Text>

            <View
              style={{
                marginTop: 40,
              }}>
              <ScrollView
                horizontal
                snapToAlignment="center"
                snapToInterval={Dimensions.get('window').width * 0.8 + 10 * 2}
                decelerationRate="fast"
                onMomentumScrollEnd={this.setBulletIndex}
                showsHorizontalScrollIndicator={false}>
                {images.map((image, index) => (
                  <Image
                    key={index}
                    source={image}
                    style={{
                      width: Dimensions.get('window').width * 0.8,
                      height: 120,
                      borderRadius: 10,
                      marginHorizontal: 20,
                    }}
                  />
                ))}
              </ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  justifyContent: 'center',
                }}>
                {images.map((image, i) => (
                  <Text
                    key={image}
                    style={
                      i == selectedIndex
                        ? {color: 'black', margin: 3}
                        : {color: 'white', margin: 3}
                    }>
                    ⬤
                  </Text>
                ))}
              </View>
            </View>

            <View
              style={{
                marginTop: 40,
              }}>
              <ScrollView
                horizontal
                snapToAlignment="center"
                snapToInterval={Dimensions.get('window').width * 0.8 + 5 * 2}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}>
                {images2.map((image, index) => (
                  <View>
                    <Image
                      key={index}
                      source={image}
                      style={{
                        width: Dimensions.get('window').width * 0.4,
                        height: 200,
                        borderRadius: 10,
                        marginHorizontal: 20,
                      }}
                    />
                    <View
                      style={{
                        width: Dimensions.get('window').width * 0.4,
                        height: 30,
                        position: 'absolute',
                        marginHorizontal: 20,
                        bottom: 0,
                        backgroundColor: 'gray',
                        borderBottomStartRadius: 10,
                        borderBottomEndRadius: 10,
                        alignContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          console.log(this.state.count);
                          this.setState({count: this.state.count + 1});
                          ToastAndroid.show(
                            this.state.shoesName[index].namaBarang + ' added',
                            ToastAndroid.SHORT,
                          );
                        }}>
                        <Image
                          source={require('./src/images/PlusIcon.png')}
                          style={styles.PlusIcon}
                        />
                      </TouchableOpacity>
                      <Text style={{fontWeight: 'bold'}}>
                        {this.state.shoesName[index].namaBarang}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        ) : this.state.selectedNav === 1 ? (
          <View />
        ) : (
          <View />
        )}
        <View
          style={{
            backgroundColor: 'gray',
            position: 'absolute',
            bottom: 0,
            width: Dimensions.get('window').width,
            height: 80,
            elevation: 200,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => this.setState({selectedNav: 0})}>
              {this.state.selectedNav === 0 ? (
                <View style={styles.NavButtonFoc}>
                  <Image
                    source={require('./src/images/HomeIcon.png')}
                    style={styles.NavButton}
                  />
                </View>
              ) : (
                <View style={styles.NavButtonUnFoc}>
                  <Image
                    source={require('./src/images/HomeIcon.png')}
                    style={styles.NavButton}
                  />
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({selectedNav: 1})}>
              {this.state.selectedNav === 1 ? (
                <View style={styles.NavButtonFoc}>
                  <Image
                    source={require('./src/images/MSGIcon.png')}
                    style={styles.NavButton}
                  />
                </View>
              ) : (
                <View style={styles.NavButtonUnFoc}>
                  <Image
                    source={require('./src/images/MSGIcon.png')}
                    style={styles.NavButton}
                  />
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({selectedNav: 2})}>
              {this.state.selectedNav === 2 ? (
                <View style={styles.NavButtonFoc}>
                  <Image
                    source={require('./src/images/ProfIcon.png')}
                    style={styles.NavButton}
                  />
                </View>
              ) : (
                <View style={styles.NavButtonUnFoc}>
                  <Image
                    source={require('./src/images/ProfIcon.png')}
                    style={styles.NavButton}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const images = [
  require('./src/images/Banner1.jpg'),
  require('./src/images/Banner2.jpg'),
  require('./src/images/Banner3.jpg'),
];

const images2 = [
  require('./src/images/Shoes1.jpg'),
  require('./src/images/Shoes2.jpg'),
  require('./src/images/Shoes3.jpg'),
];

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
    margin: 20,
  },
  TopButton: {
    margin: 20,
  },
  NavButton: {width: 50, height: 50, justifyContent: 'center', margin: 10},
  NavButtonFoc: {
    width: 120,
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'crimson',
    alignItems: 'center',
  },
  NavButtonUnFoc: {
    width: 120,
    height: 80,
    justifyContent: 'center',
    color: 'gray',
    alignItems: 'center',
  },
  CartNotif: {
    color: 'white',
    right: 0,
    marginTop: -10,
    marginRight: -4,
    position: 'absolute',
    elevation: 200,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
  },
  PlusIcon: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
});

export default App;
