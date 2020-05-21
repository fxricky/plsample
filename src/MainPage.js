import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet, Image} from 'react-native';
import {Button, Icon} from 'native-base';
import axios from 'axios'
import {connect} from 'react-redux'
import * as actions from './actions'

const ListItem = (props) => {
  const {name, gender, culture} = props.item;

  return(
    <TouchableOpacity style={style.card} onPress={() => {props.navigate('Detail', {item: {...props.item, index: props.index}})}}>
      <View style={{flex: 0.2, alignItems: "center"}}>
        <Image style={{width: 50, height: 50, borderRadius: 5}} source={{uri: `https://i.picsum.photos/id/${props.index}/200/200.jpg`}} />
      </View>
      <View style={{flex: 0.8, justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <Text>{name || 'Not specified'}</Text>
          <Icon style={{fontSize: 14}} type="MaterialCommunityIcons" name={gender == 'Male' ? `gender-male` : `gender-female`} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Mainpage = props => {
  const fetchData = () => {
    props.dbGetList();
  }

  useEffect(()=> {
    fetchData();
  }, [])

  return (
    <View style={{flex: 1}}>
      <FlatList 
        contentContainerStyle={{backgroundColor: "#E5E5E5"}}
        data={props.list}
        renderItem={item => <ListItem key={item.index} {...item} {...props.navigation}/>}
        onEndReachedThreshold={0.3}
        onEndReached={fetchData}
        />
    </View>
  )
};

const style = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    minHeight: 60,
    elevation: 1,
    backgroundColor: "white"
  }
})

const mapStatetoProps = state => ({
  list: state.reducer.list
})

export default connect(mapStatetoProps, actions)(Mainpage);
