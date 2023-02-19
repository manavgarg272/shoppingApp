import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableWithoutFeedback
} from 'react-native';
import { Appbar, } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import React, { useEffect, useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('screen');
export default function App() {



  const DATA = [
    {
      id: 100,
      name: 'ReactProX Headset',
      price: 350,
      quantity: '3 kg',
      image: 'https://picsum.photos/700',
      description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
      id: 101,
      name: 'FastLane Toy Car',
      price: 600,
      quantity: '5 L',
      image: 'https://picsum.photos/700',
      description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
      id: 102,
      name: 'SweetHome Cupcake',
      price: 2,
      quantity: '5 L',
      image: 'https://picsum.photos/700',
      description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
      id: 103,
      name: 'SweetHome Cupcake',
      price: 2,
      quantity: '5 L',
      image: 'https://picsum.photos/700',
      description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
      id: 104,
      name: 'SweetHome Cupcake',
      price: 2,
      quantity: '5 L',
      image: 'https://picsum.photos/700',
      description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
      id: 105,
      name: 'SweetHome Cupcake',
      price: 2,
      quantity: '5 L',
      image: 'https://picsum.photos/700',
      description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
  ];

  // const Item = ({ product }) => (
  //   console.log("imnagetitle", product.image),


  // );
  return (
    <SafeAreaProvider>
      <Appbar.Header style={{ backgroundColor: 'yellow' }}>
        <Appbar.Content title="Shopping App" />
      </Appbar.Header>
      <ScrollView >
        <View style={{ marginTop: 10 }}>

          <StatusBar style="auto" />
          {
            DATA.map((product) => {
              return (
                <ShoppingCard product={product} key={product.id} />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaProvider >

  );
}

function ShoppingCard({ product }) {
  const [count, setCount] = useState(0);
  const onPressAdd = () => setCount(prevCount => prevCount + 1);
  const onPressreduce = () => setCount(prevCount => prevCount - 1);
  return (
    <View style={styles.card}>

      <Image style={{ width: width / 3, height: height / 7, borderRadius: 5 }} source={{ uri: product.image }} />

      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: height / 50, marginBottom: 20 }}>{product.name}</Text>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }} >{product.quantity}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 10 }} >Rs {product.price}</Text>

          {

            count == 0 ?
              <TouchableWithoutFeedback onPress={onPressAdd} >
                <View style={{ borderWidth: 1, borderColor: 'green', marginLeft: 40, borderRadius: 10, width: width / 4, alignItems: 'center', padding: 10 }} >

                  <Text >Add</Text>

                </View>
              </TouchableWithoutFeedback>

              :
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'green', borderWidth: 1, marginLeft: 40, borderRadius: 10, width: width / 4, padding: 10, backgroundColor: 'green', alignItems: 'center' }}>
                <TouchableWithoutFeedback onPress={onPressAdd}>
                  <Icon size={15} name="plus" style={{ color: 'white', fontWeight: 'normal', }} />
                </TouchableWithoutFeedback>


                <Text style={{ color: 'white', fontWeight: 'normal', }} >{count}</Text>
                <TouchableWithoutFeedback onPress={onPressreduce}>
                  <Icon name="minus" size={15} style={{ color: 'white', fontWeight: 'normal', }} />
                </TouchableWithoutFeedback>
              </View>
          }

        </View>
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    marginBottom: 15,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },

  item: {


    margin: 10,
    padding: 10,
    width: 250
  },
  card: {
    height: height / 5.5, width: width / 1.1, marginEnd: 10, marginStart: 10, marginBottom: 10, flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1
  }
});
