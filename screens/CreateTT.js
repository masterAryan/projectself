import React, { useState } from "react";
import { View, Picker, StyleSheet,TextInput,ImageBackground } from "react-native";
import {Header, withTheme} from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
      <ImageBackground source = {require('../assets/CreateBG.webp')} style = {{height:RFValue(400)}}>
      <View>
           <Header
          backgroundColor={'#DA2828'}
          centerComponent={{
            text: 'Daily Routine',
            style: { color: '#fff', fontSize: 40 },
          }}
        />
        
    <View style={styles.container}>
         
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Monday"  />
        <Picker.Item label="Tuesday" />
        <Picker.Item label="Wednesday"  />
        <Picker.Item label="Thursday" />
        <Picker.Item label="Friday" />
        <Picker.Item label="Saturday"  />
        <Picker.Item label="Sunday" />
      </Picker>
      
      </View>
     
      <View style = {styles.Input}>
      <TextInput placeholder="enter the start time" style = {styles.Text}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text3}></TextInput>

      <TextInput placeholder="enter the start time" style = {styles.Text}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text3}></TextInput>


      <TextInput placeholder="enter the start time" style = {styles.Text}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text3}></TextInput>


      <TextInput placeholder="enter the start time" style = {styles.Text}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text3}></TextInput>

    
      
      <TextInput placeholder="enter the end time" style = {styles.Text}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text3}></TextInput>


      <TextInput placeholder="enter the start time" style = {styles.Text2}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text2}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text4}></TextInput>


      <TextInput placeholder="enter the start time" style = {styles.Text2}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text2}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text4}></TextInput>


      <TextInput placeholder="enter the start time" style = {styles.Text2}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text2}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text4}></TextInput>


      <TextInput placeholder="enter the start time" style = {styles.Text2}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text2}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text4}></TextInput>


      <TextInput placeholder="enter the start time" style = {styles.Text2}></TextInput>
      <TextInput placeholder="enter the end time" style = {styles.Text2}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {styles.Text4}></TextInput></View>
      
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center"
  },
  Input:{
    
    flexWrap: "wrap",
    flexDirection: "coulmn",
    height:50,
    width:50,
    fontSize:30,
   
  },
  

    


});

export default App;