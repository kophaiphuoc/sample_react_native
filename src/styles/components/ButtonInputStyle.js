import {StyleSheet} from 'react-native';
import {COLORS} from '../SheetColor';
import globalStyles from '../GlobalStyle';

// size base style

const BASE_SIZE_SMALL = {
  width: '100%',
  height: 45,
  ...globalStyles.centerItem,
};
const BASE_SIZE_MEDIUM = {
  width: '100%',
  height: 50,
  ...globalStyles.centerItem,
};
const BASE_SIZE_LARGE = {
  width: '100%',
  height: 55,
  ...globalStyles.centerItem,
};

// text base style

const BASE_TEXT_SMALL = {
  fontSize: 12,
  color: COLORS.WHITE,
};
const BASE_TEXT_MEDIUM = {
  fontSize: 13,
  color: COLORS.WHITE,
};
const BASE_TEXT_LARGE = {
  fontSize: 14,
  color: COLORS.WHITE,
};

const CSS_CORE_OUTLINE = {
  borderWidth: 1,
  borderColor: COLORS.silver_GRAY,
  borderRadius: 5,
};

const CSS_CORE_LINEAR = {
  borderRadius: 5,
  BACKGROUNDColor: COLORS.PRIMARY,
};

export const outLineButton = StyleSheet.create({
  SMALL: {
    ...BASE_SIZE_SMALL,
    ...BASE_TEXT_SMALL,
    ...CSS_CORE_OUTLINE,
  },
  MEDIUM: {
    ...BASE_SIZE_MEDIUM,
    ...BASE_TEXT_MEDIUM,
    ...CSS_CORE_OUTLINE,
  },
  LAGRE: {
    ...BASE_SIZE_LARGE,
    ...BASE_TEXT_LARGE,
    ...CSS_CORE_OUTLINE,
  },
});

export const linearButton = StyleSheet.create({
  SMALL: {
    ...BASE_SIZE_SMALL,
    ...BASE_TEXT_SMALL,
    ...CSS_CORE_LINEAR,
  },
  MEDIUM: {
    ...BASE_SIZE_MEDIUM,
    ...BASE_TEXT_MEDIUM,
    ...CSS_CORE_LINEAR,
  },
  LAGRE: {
    ...BASE_SIZE_LARGE,
    ...BASE_TEXT_LARGE,
    ...CSS_CORE_LINEAR,
  },
});
