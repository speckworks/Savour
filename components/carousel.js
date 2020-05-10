import * as React from 'react';
import { useState } from 'react';
import {
  Text, 
  View,
  Image,
  Button,
  SafeAreaView, 
  Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import amber from '../assets/amberlager.jpg';
import lager from "../assets/cerveza-lager.png";

export function MyCarousel(props){
    const Device_Width = Dimensions.get("window").width
    const [carouselItems, setCarouselItems] = useState([
      { beer: "IPA",
      img: amber
        // image: `${amber}`
      },
       { beer: "Lager",
        img: lager
      }
    ]);
        console.log("usestate", carouselItems);
    
        const [activeIndex, setActiveIndex] = useState([0])

    const _renderItem = ({item,index})=>{
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 500,
              width: 400,
              padding: 10,
              marginLeft: 0,
              marginRight: 0, 
              paddingTop: 0}}>
            <Text style={{fontSize: 30, height:400}}>{item.beer}</Text>
            <Text>{item.id}</Text>
            <Image style={{source:item.img}}></Image>
            <Button style={{height:'100px', backgroundColor:'black', color:'black'}}>Get This Beer</Button>

          </View>
        )
    }

    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'black', paddingTop: 0, }}>
      <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
          <Carousel
            layout={"stack"}
            data={carouselItems}
            windowSize={1}
            sliderHeight={800}
            sliderWidth={400}
            itemWidth={Device_Width}
            renderItem={_renderItem}
            onSnapToItem = { index => setActiveIndex({activeIndex:index}) } />
      </View>
    </SafeAreaView>
  );
}