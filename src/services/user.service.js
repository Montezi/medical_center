/* eslint-disable no-async-promise-executor */
import auth from '@react-native-firebase/auth';

export const login = (values) => {
  const { email, password } = values;
  return new Promise(async (resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const register = (values) => {
  const { email, password } = values;
  return new Promise(async (resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logoutUser = () => {
  return new Promise(async (resolve, reject) => {
    auth()
      .signOut()
      .then(() => {
        resolve('Logout efetuado com sucesso');
      })
      .catch((error) => {
        reject(error);
      });
  });
};
