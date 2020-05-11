import * as React from 'react';
import { useState } from 'react';
import {
  Text, 
  View,
  Image,
  SafeAreaView, 
  Dimensions} from 'react-native';
import Button from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import amber from '../assets/amberlager.jpg';
import lager from "../assets/cerveza-lager.png";
import andina from '../assets/andina.jpg'


export function button(){
<>
<Button type="outline"
                    title="Get This Beer"
                    style={{height:'100px', backgroundColor:'0c3b49'}}
                    ></Button>  
</>
}

export function MyCarousel(props){
    const Device_Width = Dimensions.get("window").width
    const [carouselItems, setCarouselItems] = useState([
      { beer: "IPA",
      img: amber
        // image: `${amber}`
      },
       { beer: "Lager",
        img: lager
      },
      { beer: "Andina",
        img: andina
      }
    ]);
        console.log("usestate", carouselItems);
    
        const [activeIndex, setActiveIndex] = useState([0])

    const _renderItem = ({item,index})=>{
        return (
          <View style={{
              display:'flex',
              flexDirection:"column",
              backgroundColor:'black',
              borderRadius: 5,
              height: 600,
              width: 370,
              padding: 0,
              marginLeft: 0,
              marginRight: 0, 
              paddingTop: 0}}>
            <Text style={{fontSize: 30, color:'white'}}>
              {item.beer}
              {"\n"}
            </Text>
            <Text>
              {item.id}            
              {"\n"}
            </Text>
            <Image source={{uri:item.img}}
            style={{
              display:'flex',
              flex:4,
              backgroundColor:'black',
              borderRadius: 5,
              height: "100",
              width: "100%",
              padding: 10,
              marginLeft: 0,
              marginRight: 0, 
              paddingTop: 0}}>
              </Image>
            <br></br>
             <button style={{display:'flex',
             flex:1,
             height:"40px"}}
             title="Get This Beer"></button>
          </View>
        )
    }

    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'black', paddingTop: 0, }}>
      <View style={{ flex: 1, 
                flexDirection:'row', 
                justifyContent:'spaceAround',
                textAlign:'center' }}
                >
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