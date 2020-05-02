import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Header from './Components/Header'

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
      ] ,
      currentPlayer: 1,
    });
  }

  getWinner = () =>{
    var sum;
    var arr= this.state.gameState;

    //checking rows
    for( var i=0; i<3; i++){
      sum= arr[i][0] + arr[i][1] + arr[i][2];
      if(sum == 3) {return 1;}
      else if(sum == -3) {return -1;}
    }

    //checking columns
    for(var i=0 ; i<3; i++){
      sum= arr[0][i] + arr[1][i] + arr[2][i];
      if(sum == 3) {return 1;}
      else if(sum == -3) {return -1;}
    }

    //checking diagonals
    sum= arr[0][0] + arr[1][1] + arr[2][2];
    if(sum == 3) {return 1;}
    else if(sum == -3) {return -1;}

    sum= arr[0][2] + arr[1][1] + arr[2][0] ;
    if(sum == 3) {return 1;}
    else if(sum == -3) {return -1;}

    return 0;
  }
  

  onTilePress = (row, col) =>{
    //dont allow to click on tile already chosen
    var value= this.state.gameState[row][col]
    if(value !=0) {return; }

    //getting value of current player
    var currentPlayer = this.state.currentPlayer;
   
    //setting tiles
    var arr = this.state.gameState.slice();
    arr[row][col]= currentPlayer;
    this.setState({gameState: arr});

    //swapping the player
    var nextPlayer= (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

    //checking for winner
    var winner = this.getWinner();
    if (winner == 1){
      Alert.alert("YAYYYY", "Player 1 WON");
      this.initialiseGame();
    }
    else if(winner== -1){
      Alert.alert("YAYYYY", "Player 2 WON");
      this.initialiseGame();
    }

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
      <View style= {styles.main}>
        <Header title= 'TIC TAC TOE' />
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
        <TouchableOpacity style= {styles.restartbtn} >
          <Button title= 'New Game' onPress={this.initialiseGame} color= '#451e3e'/>
        </TouchableOpacity>
     </View>
    );
  }
}


const styles = StyleSheet.create({

  main: {
    flex:1,
    paddingTop:10,
    backgroundColor: '#f0e4e4',
  },

  container:{
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0e4e4',
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
  restartbtn:{
    backgroundColor: '#451e3e',
    padding:10,
    margin: 5,        
    marginTop: 0,
    marginBottom: 15,
  },
});
