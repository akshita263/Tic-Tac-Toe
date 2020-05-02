import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state= {
      gameState: [
        [0, 0, 0],
        [0, 0, 0], 
        [0, 0, 0]
      ],
      currentPlayer: 1,
    }
  }

  componentDidMount(){
    this.initialiseGame();
  }

  initialiseGame = () =>{
    this.setState({gameState:
      [
        [0, 0, 0],
        [0, 0, 0], 
        [0, 0, 0]
      ] 
    });
  }

  onTilePress = (row, col) =>{
    
  }

  renderIcon = (row, col) => {
    var value= this.state.gameState[row][col];
    switch(value){
      case 1: return <Icon name='close' style={styles.iconx}/>;
      case -1: return <Icon name='circle-outline' style={styles.icono}/>
      default: return <View/>
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
          onPress= {()=> this.onTilePress(0, 0)}
          style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0,0)}
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= {()=> this.onTilePress(0, 1)}
          style={[styles.tile, {borderTopWidth: 0}]}>
            {this.renderIcon(0,1)}  
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= {()=> this.onTilePress(0, 2)}
          style={[styles.tile, {borderRightWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0,2)}
          </TouchableOpacity>
        </View>


        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
          onPress= {()=> this.onTilePress(1, 0)}
          style={[styles.tile, {borderLeftWidth: 0}]}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= {()=> this.onTilePress(1, 1)}
          style={styles.tile}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= {()=> this.onTilePress(1, 2)}
          style={[styles.tile, {borderRightWidth: 0}]}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>
        </View>


        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
          onPress= {()=> this.onTilePress(2, 0)}
          style={[styles.tile, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
            {this.renderIcon(2,0)}
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= {()=> this.onTilePress(2, 1)}
          style={[styles.tile, {borderBottomWidth: 0}]}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>

          <TouchableOpacity 
          onPress= {()=> this.onTilePress(2, 2)}
          style={[styles.tile, {borderRightWidth: 0, borderBottomWidth: 0}]}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>
        </View>
     </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tile:{
    height:120,
    width:120,
    borderWidth: 5,
  },
  iconx: {
    color:'red',
    fontSize: 90,
    padding: 10,
  },
  icono: {
    color:'green',
    fontSize: 75,
    padding: 20,
  },

});
