import { StyleSheet } from 'react-native'

export default StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundImage: 'https://i.imgur.com/nZT3soB.jpg',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'helvetica',
    margin: 50,
    top: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    margin: 5,
  },
  pics: {
    marginTop: 30,
    width: 500,
    height: 300,
  }
})
