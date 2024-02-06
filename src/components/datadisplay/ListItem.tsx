import {View, Dimensions} from 'react-native';
import React from 'react';

// import third pary
import {FlashList} from '@shopify/flash-list';

// import project
import NotFound from './NotFound';
import {COLORS} from '../../styles/constans/SheetColor';

const {width, height} = Dimensions.get('window');

interface ListItemProps {
  lengthListItem: number;
  heightItem: number;
  RenderItem: React.ReactNode;
  ListHeaderComponent?: React.ReactNode;
  ListFooterComponent?: React.ReactNode;
  data: any[];
  scrollEnabled?: boolean;
  initRender?: number;
  maxRender?: 3;
  windowSize?: 10;
  onRefresh?: Function;
}

const ListItem: React.FC<ListItemProps> = ({
  lengthListItem,
  heightItem,
  RenderItem,
  ListHeaderComponent,
  ListFooterComponent,
  data,
  scrollEnabled = true,
  initRender = 5,
  maxRender = 5,
  windowSize = 10,
  onRefresh,
}) => {
  return (
    <View>
      <View
        style={{
          height: '100%',
          width: width,
        }}>
        <FlashList
          data={data}
          extraData={data}
          renderItem={()=>RenderItem}
          scrollEnabled={scrollEnabled}
          keyExtractor={(_, index) => index.toString()}
          contentInset={{bottom: 100}}
          contentContainerStyle={{paddingBottom: 100}}
          initialNumToRender={initRender}
          maxToRenderPerBatch={maxRender}
          showsVerticalScrollIndicator={false}
          windowSize={windowSize}
          estimatedItemSize={heightItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={
            <View
              style={{
                height: height * 2,
                backgroundColor: COLORS.white,
              }}>
              <NotFound refresh={onRefresh} type="animation" />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default ListItem;
