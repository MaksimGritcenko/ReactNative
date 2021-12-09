import { Dimensions, StyleSheet } from 'react-native';
import { colorGreen } from '../../constants/Colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 5,
    marginBottom: 50,
    paddingBottom: 10,
    borderTopWidth: 1,
    width,
  },
  singleItem: {
    margin: 10,
    borderBottomColor: colorGreen,
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8
  }
})