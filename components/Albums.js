import React from 'react';
import {ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import * as S from './styles/AlbumStyles';

const Albums = ({albums}) => {
  const photos = useSelector((state) => state.Albums.photos);

  return (
    <ScrollView>
      <S.FlexView>
        {albums.length > 0 &&
          albums.map((el, key) => (
            <S.AlbumWrapper key={key}>
              <Image
                source={{
                  uri: photos.find((item) => item.albumId === el.id)
                    .thumbnailUrl,
                  height: 139,
                  width: 160,
                }}
                style={S.ImageRadius}
              />
              <S.Title>{el.title}</S.Title>
            </S.AlbumWrapper>
          ))}
      </S.FlexView>
    </ScrollView>
  );
};

export default Albums;
