import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import sampleApi from '../../../sampleApi';
import {useEffect, useState} from 'react';

const fetchMoreData = async page => await sampleApi(page);

const getFromApi = endpoint => {
  return fetch(endpoint, {method: 'GET'}).then(response => response.json());
};

const InfiniteList = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(data.concat(await fetchMoreData(0)));
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.listTile}>
          <Text>{item.text}</Text>
        </View>
      )}
      onEndReached={async () => {
        setData(data.concat(await fetchMoreData(page)));
        setPage(page + 1);
      }}
      onEndReachedThreshold={0.9}
      ListFooterComponent={<ActivityIndicator />}
    />
  );
};

const DisplayApiData = () => {
  const [data, setData] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function getData() {
      setData(await getFromApi('https://api.sampleapis.com/coffee/hot'));
    }
    getData();
  }, []);

  return <Text>{data ? data.toString() : 'Loading'}</Text>;
};

const About = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{margin: 16}}>
        This is a sample app created by Abhishek Upmanyu. Here's an infinite
        list:
      </Text>
      <DisplayApiData />
      <InfiniteList />
    </View>
  );
};

const styles = StyleSheet.create({
  listTile: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default About;
