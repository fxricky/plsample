import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {Icon} from 'native-base'

const HeaderText = props => 
<Text style={{fontWeight: 'bold', fontSize: 18}}>
  {props.children}
</Text>

const Section = props =>
<View style={style.section}>
  {props.children}
</View>

const DetailPage = props => {
  console.log(props.route.params)

  const{index, name, gender, tvSeries, playedBy, titles} = props.route.params.item

  return(
    <View style={{flex: 1}}>
      <View style={{flex: 0.4, margin: 10}}>
        <Image style={{flex: 1, borderRadius: 5}} source={{uri: `https://i.picsum.photos/id/${index}/500/500.jpg`}} />
      </View>
      <View style={{flex: 0.6, margin: 10}}>
        <ScrollView>
          <Section>
            <HeaderText>Name:</HeaderText>
              <Text>{name || 'Not specified'} <Icon style={{fontSize: 14}} type="MaterialCommunityIcons" name={gender == 'Male' ? `gender-male` : `gender-female`} /></Text>
          </Section>
          <Section>
            <HeaderText>TV Series:</HeaderText>
              {tvSeries.map((obj, ind) =>  <Text key={ind}>{obj}</Text>)}
          </Section>
          <Section>
            <HeaderText>Played By:</HeaderText>
              {playedBy.map((obj, ind) =>  <Text key={ind}>{obj}</Text>)}
          </Section>
          <Section>
            <HeaderText>Titles: </HeaderText>
              {titles.map((obj, ind) =>  <Text key={ind}>{obj}</Text>)}
          </Section>
        </ScrollView>
      </View>
    </View>
);}

const style = StyleSheet.create({
  section:{
    marginVertical: 10
  }
})

export default DetailPage;
