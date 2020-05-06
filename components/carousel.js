import * as React from 'react';
import { useState } from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import amber from '../assets/amberlager.jpg';
import lager from "../assets/cerveza-lager.png";

export function MyCarousel(props){
    
    const [carouselItems, setCarouselItems] = useState([
      { beer: "IPA",
        // image: `${amber}`
      },
       { beer: "Lager",
        // image: `${lager}`
      }
    ]);
        console.log("usestate", carouselItems);
    
        const [activeIndex, setActiveIndex] = useState([0])

    const _renderItem = ({item,index})=>{
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: "100%",
              padding: 50,
              marginLeft: 0,
              marginRight: 0, }}>
            <Text style={{fontSize: 30}}>{item.beer}</Text>
            {/* <Image source={require(item.image)}/> */}
            <Text>{item.id}</Text>
          </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'black', paddingTop: 50, }}>
      <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
          <Carousel
            layout={"default"}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={_renderItem}
            onSnapToItem = { index => setActiveIndex({activeIndex:index}) } />
      </View>
    </SafeAreaView>
  );
}