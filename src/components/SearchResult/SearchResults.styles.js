import { Dimensions, StyleSheet } from 'react-native';
import { colorGreen, darkGreen } from '../../constants/Colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 50,
    paddingBottom: 10,
    borderTopWidth: 1,
    width,
    backgroundColor: 'rgba(0,0,0,.1)'
  },
  singleItem: {
    margin: 10,
    borderBottomColor: colorGreen,
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  title: {
    color: darkGreen,
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    color: darkGreen,
    fontSize: 14,
    marginTop: 8
  }
})