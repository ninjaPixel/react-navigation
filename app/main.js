import Expo from 'expo';
import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    
    static navigationOptions = {
        title: 'React Navigator Demo',
    };
    
    
    renderCountryButtons() {
        const countriesAndCities = [
            {
                country: 'America',
                cities: [{city: 'New York'}, {city: 'San Francisco'}, {city: 'Louisville'}, {city: 'Seattle'}]
            },
            {
                country: 'Canada',
                cities: [{city: 'Toronto'}, {city: 'Vancouver'}, {city: 'Montreal'}]
            },
            {
                country: 'England',
                cities: [{city: 'London'}, {city: 'Cambridge'}, {city: 'Oxford'}, {city: 'Manchester'}]
            },
            {
                country: 'France',
                cities: [{city: 'Paris'}, {city: 'Nantes'}, {city: 'Cannes'}, {city: 'Bordeaux'}]
            },
        ];
        
        return countriesAndCities.map((d, i)=> {
            const {navigate} = this.props.navigation;
            return (
              <View style={styles.button} key={i}>
                  <Button onPress={() => navigate('Country', {country: d.country, cities: d.cities})}
                          title={d.country}
                  /></View>
            );
        });
    }
    
    render() {
        return (
          <ScrollView style={styles.container}>
              <Text style={styles.text}>This simple app demos the features of react-navigator.</Text>
              <Text style={styles.text}>Choose a country to visit:</Text>
              {this.renderCountryButtons()}
          </ScrollView>
        );
    }
}


class CountryScreen extends React.Component {
    static navigationOptions = {
        title: ({state}) => state.params.country
    };
    
    renderCities() {
        const {navigate} = this.props.navigation;
        return this.props.navigation.state.params.cities.map((d, i)=> {
            return (
              <View style={styles.button} key={i}>
                  <Button onPress={() => navigate('City', {city: d.city})}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    text: {
        padding: 10,
    },
    button: {
        padding: 10,
    }
});

const lorem = "Marfa bushwick distillery venmo readymade, seitan taxidermy single-origin coffee. Fashion axe iPhone pug, edison bulb pinterest bicycle rights intelligentsia chartreuse cronut try-hard subway tile blog typewriter. Microdosing pitchfork kogi forage, vape fixie green juice austin fam fap cray poutine bespoke art party. Kale chips hella meggings neutra put a bird on it la croix, kombucha try-hard stumptown disrupt pour-over. Fam beard migas, pinterest poke woke intelligentsia franzen 90's raw denim af vaporware vinyl. Woke affogato intelligentsia gochujang, schlitz tumblr authentic artisan echo park kickstarter pour-over food truck retro hashtag. Hammock thundercats four loko messenger bag unicorn keytar, dreamcatcher truffaut poutine lumbersexual flannel heirloom photo booth biodiesel gochujang.";


class CityInfoScreen extends React.Component {
    render() {
        return (
          <View>
              <Text style={styles.text}>You can use tabs, too. Note that these are contained within thier parent
                                        route.</Text>
              <Text style={styles.text}>{lorem}</Text>
          </View>
        );
    }
}

class CityMapScreen extends React.Component {
    render() {
        return (
          <View>
              <Text style={styles.text}>Mappy McMap Face</Text>
          </View>
        );
    }
}


const CityTabNavigator = TabNavigator({
    Info: {screen: CityInfoScreen},
    Map: {screen: CityMapScreen},
});
CityTabNavigator.navigationOptions = {
    title: ({state}) => {
        return state.params.city;
    }
};
const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Country: {screen: CountryScreen},
    City: {screen: CityTabNavigator},
});
Expo.registerRootComponent(SimpleApp);

