import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    margin: 8,
    borderWidth: 3,
    borderColor: '#F06C63',
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 18,
    fontFamily: 'AcuminPro-Bold',
    marginTop: 5,
  },
  phone: {
    fontSize: 13,
    fontFamily: 'AcuminPro-Regular',
    borderRadius: 50,
  },
  button: {
    marginTop: 5,
    borderRadius: 20,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: 'AcuminPro-Regular',
  },
});

export default styles;
