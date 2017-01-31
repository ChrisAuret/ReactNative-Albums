import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = ({ album }) => { //deconstruct 'props' into just 'album'
  const { title, artist, thumbnail_image, image } = album;
  const { headerContentStyle,
          thumbnailStyle, 
          thumbnailContainerStyle,
          headerTextStyle,
          imageStyle
        } = styles;

  return (
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image 
          style={thumbnailStyle}
          source={{ uri: thumbnail_image }} 
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>        
      </CardSection>
      <CardSection>
        <Image 
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
