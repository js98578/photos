import React from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../styles';

const PhotosErrorModal = () => {
  const {isError, message} = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const dismissModal = () => {
    dispatch({type: 'ERROR_DISMISSED'});
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isError}
      onRequestClose={dismissModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <TouchableHighlight
            style={styles.dismissButton}
            onPress={dismissModal}>
            <Text style={styles.textStyle}>Ok</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  dismissButton: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PhotosErrorModal;
