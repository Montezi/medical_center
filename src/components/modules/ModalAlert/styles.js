import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundModal:{
    position: absolute;
  top: 0;
  left: 0;
  background-color: "rgba(0, 0, 0, 0.33)";
  width: 100%;
  height: 100%;
  padding: 0;
  align-items:center;
  justify-content:center;
  }

});

export default styles;

const BackgroundModal = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  background-color: "rgba(0, 0, 0, 0.33)";
  width: 100%;
  height: 100%;
  padding: 0;
  align-items:center;
  justify-content:center;
`;

const ContainerModal = styled.Modal`
`;

const Content = styled.View`
  /* position: relative; */
  align-self:stretch;
  margin-left: 16px;
  margin-right: 16px;
  justify-content: center;
  background: #ffffff;
  padding: ${4 * 8}px ${4 * 8}px;
  border-radius: 10px;
  border: solid 1px rgba(0, 0, 0, 0.1);
`;
const ContainerButton = styled.View`
  margin-top: 10px;
  align-items: flex-end;
`;
const ContainerIcon = styled.View`
  margin-bottom: 5px;
  align-items: center;
`;
