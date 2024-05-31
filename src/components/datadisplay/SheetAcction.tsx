import React, {useRef} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {useActionSheet} from '@expo/react-native-action-sheet';

const SheetAcction = () => {
  const {showActionSheetWithOptions} = useActionSheet();
  const actionSheetRef = useRef<any>(null);

  const showActionSheet = () => {
    const options: Array<string> = [
      'Option 1',
      'Option 2',
      'Option 3',
      'Cancel',
    ];
    const cancelButtonIndex: number = options.length - 1;

    actionSheetRef.current = showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex !== cancelButtonIndex) {
          // Handle selected option
          console.log('Selected option:', options[buttonIndex]);
        }
      },
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button title="Show Action Sheet" onPress={showActionSheet} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SheetAcction;
