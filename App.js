/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import sampleApi from './sampleApi';
import About from './src/screens/About';
import Home from './src/screens/Home';

const fetchMoreData = async page => await sampleApi(page);

const InfiniteList = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(data.concat(await fetchMoreData(0)));
    }
    fetchData();
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.listTile}>
          <Text>{item.text}</Text>
        </View>
      )}
      onEndReachedThreshold={0.7}
      onEndReached={async () => {
        setData(data.concat(await fetchMoreData(page)));
        setPage(page + 1);
      }}
      ListFooterComponent={<ActivityIndicator />}
    />
  );
};

const App /*: () => Node*/ = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={({navigation, route}) => ({
            headerTitle: getFocusedRouteNameFromRoute(route) ?? 'Home',
            // headerRight: () => (
            //   <Button
            //     title="About"
            //     onPress={() => navigation.navigate('About')}
            //   />
            // ),
          })}
        />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <View>
  //       <Text>Hi</Text>
  //     </View>
  //     <InfiniteList />
  //     {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

  //     <Header />
  //     <ScrollView
  //       contentInsetAdjustmentBehavior="automatic"
  //       style={backgroundStyle}>
  //       <View
  //         style={{
  //           backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //         }}>
  //         <Section title="Step One">
  //           Edit <Text style={styles.highlight}>App.js</Text> to change this
  //           screen and then come back to see your edits.
  //         </Section>
  //         <Section title="See Your Changes">
  //           <ReloadInstructions />
  //         </Section>
  //         <Section title="Debug">
  //           <DebugInstructions />
  //         </Section>
  //         <Section title="Learn More">
  //           Read the docs to discover what to do next:
  //         </Section>
  //         <LearnMoreLinks />
  //       </View>
  //     </ScrollView> */}
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  listTile: {
    backgroundColor: '#ffffff',
    padding: 16,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
