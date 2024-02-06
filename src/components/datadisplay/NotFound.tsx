import {StyleSheet, View, Image, Dimensions} from 'react-native';
import React from 'react';

import LottieView from 'lottie-react-native';
import {
  ANIM_DEFAULT_SCREEN,
  IMG_DEFAULT_SCREEN,
} from '../../common/constans/ListImage';
import {COLORS} from '../../styles/constans/SheetColor';
import BaseButton from '../baseelement/BaseButton';
import globalStyles from '../../styles/GlobalStyle';

const {width, height} = Dimensions.get('screen');

interface NotFoundProps {
  type?: 'animation' | 'image';
  refresh?: Function;
}

const NotFound: React.FC<NotFoundProps> = ({
  type = 'animation',
  refresh = () => null,
}) => {
  return (
    <View>
      {type === 'animation' ? (
        <View
          style={[
            styles.containerLoti,
            globalStyles.centerItem,
            styles.backgroundColor,
          ]}>
          <View style={globalStyles.flexTwo}>
            <LottieView
              source={ANIM_DEFAULT_SCREEN.NOT_FOUND}
              autoPlay
              loop
              style={styles.imgNotFound}
            />
          </View>
          <View style={[styles.vButtonReFresh, globalStyles.flexOne]}>
            <BaseButton
              typeButton="small-linear"
              titleButton="Làm mới"
              onPressButton={refresh}
            />
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.containerLoti,
            globalStyles.centerItem,
            styles.backgroundColor,
          ]}>
          <View style={globalStyles.flexTwo}>
            <Image
              style={styles.imgNotFound}
              source={IMG_DEFAULT_SCREEN.NOT_FOUND}
            />
          </View>
          <View style={[styles.vButtonReFresh, globalStyles.flexOne]}>
            <BaseButton
              typeButton="small-linear"
              titleButton="Làm mới"
              onPressButton={refresh}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  vButtonReFresh: {
    width: width / 2,
  },
  backgroundColor: {
    backgroundColor: COLORS.white,
  },
  containerLoti: {
    height: height,
  },
  imgNotFound: {
    objectFit: 'contain',
    width: width,
    height: '100%',
    backgroundColor: COLORS.white,
  },
});
