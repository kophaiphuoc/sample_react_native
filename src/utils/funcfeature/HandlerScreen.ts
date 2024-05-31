export const nextScreen = (
  navigation: any,
  nameScreen: string,
  params: object,
) => {
  navigation.navigate({name: nameScreen, params: params});
};
