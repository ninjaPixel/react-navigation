import Expo from 'expo';
import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import styles from '../styles/styles';


export default class CountryScreen extends React.Component {
    static navigationOptions = {
        title: ({state}) => state.params.country
    };
    
    renderCities() {
        // const {navigate} = this.props.navigation;
        return this.props.navigation.state.params.cities.map((d, i)=> {
            return (
              <View style={styles.button} key={i}>
                  <Button onPress={() => this.props.navigation.navigate('City', {city: d.city})}
                          title={d.city}
                  /></View>
            );
        });
    }
    
    render() {
        return (
          <View>
              <Text style={styles.text}>Items (routes) are added to the Navigation stack</Text>
              {this.renderCities()}
          </View>
        );
    }
}