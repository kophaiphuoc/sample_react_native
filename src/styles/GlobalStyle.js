import {StyleSheet} from 'react-native';
import {COLORS} from './SheetColor';

const NUMBER_PADDING = 10;
const NUMBER_MARGIN = 10;

const CENTER_ITEM = {
  justifyContent: 'center',
  alignItems: 'center',
};

const SPACING_ITEM = {
  margin: NUMBER_MARGIN,
  padding: NUMBER_PADDING,
};

const BASE_TEXT_COLOR = {
  color: COLORS.BLACK,
  fontWeight: '400',
};
const BASE_TEXT_FONT = {
  small: 12,
  medium: 13,
  large: 14,
};

const BASE_PADDING = {
  paddingLeft: NUMBER_PADDING,
  paddingRight: NUMBER_PADDING,
  paddingTop: NUMBER_PADDING,
  paddingBottom: NUMBER_PADDING,
};

const BASE_MARGIN = {
  marginTop: NUMBER_MARGIN,
  marginLeft: NUMBER_MARGIN,
  marginBottom: NUMBER_MARGIN,
  marginRight: NUMBER_MARGIN,
};

const BASE_FLEX_ROW = {
  flexDirection: 'row',
  flexWrap: 'wrap',
};

const globalStyles = StyleSheet.create({
  container: {
    ...CENTER_ITEM,
    flex: 1,
    BACKGROUNDColor: COLORS.WHITE,
  },
  centerItem: {
    ...CENTER_ITEM,
  },
  spacingItem: {
    ...SPACING_ITEM,
  },

  // PADDING CSS
  pdTop10: {
    ...BASE_PADDING.paddingTop,
  },
  pdBottom10: {
    ...BASE_PADDING.paddingBottom,
  },
  pdLeft10: {
    ...BASE_PADDING.paddingLeft,
  },
  pdRight10: {
    ...BASE_PADDING.paddingRight,
  },

  // MARGIN CSS
  mgTop10: {
    ...BASE_MARGIN.marginTop,
  },
  mgBottom10: {
    ...BASE_MARGIN.marginBottom,
  },
  mgLeft10: {
    ...BASE_MARGIN.marginLeft,
  },
  mgRight10: {
    ...BASE_MARGIN.marginRight,
  },

  // TEXT CSS
  textSmall: {
    ...BASE_TEXT_COLOR,
    fontSize: BASE_TEXT_FONT.small,
  },
  textMedium: {
    ...BASE_TEXT_COLOR,
    fontSize: BASE_TEXT_FONT.medium,
  },
  textLarge: {
    ...BASE_TEXT_COLOR,
    fontSize: BASE_TEXT_FONT.large,
  },

  // BASE DRIECTION FLEX
  flexRowBettweenWarp: {
    ...BASE_FLEX_ROW,
    justifyContent: 'space-between',
  },
  flexRowAroundWarp: {
    ...BASE_FLEX_ROW,
    justifyContent: 'space-around',
  },

  // FLEX NUMBER
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  flexThree: {
    flex: 3,
  },
  flexFour: {
    flex: 4,
  },
});

export default globalStyles;
