import React, {useRef, useState} from "react";
import {
    Dimensions, FlatList, Image, Modal,
    Text, TouchableOpacity,
    View, ScrollView
} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

import Carousel  from 'react-native-snap-carousel';
import {AntDesign} from "@expo/vector-icons";
import AddImage from "../../AddImage";
import { styles } from "./Images.style";

import { getIsLV } from '../../../utils/Translations/Translations';
import LV from '../../../utils/Translations/lv.json';
import LogoComponent from "../../Logo/Logo.component";

const { width } = Dimensions.get('window');

export const ImagesComponent = ({ imageUriArray, deleteImage, language }) => {
    const carouselRef = useRef();
    const flatListRef = useRef();

    const [indexSelected, setIndexSelected] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onTouchThumbnail = touched => {
        if (touched === indexSelected) return;

        carouselRef?.current?.snapToItem(touched)
    };

    const onSelect = indexSelected => {
        setIndexSelected(indexSelected)

        flatListRef?.current?.scrollToOffset({
            offset: indexSelected * 80,
            animated: true
        })
    };

    function closeModalUfAllImagesDeleted() {
      if (imageUriArray.length - 1 === 0) setIsModalVisible(false);
    }

    function renderItem(image, index) {
        return (
            <TouchableOpacity
                style={{ top: 50 }}
                onLongPress={() => {
                  deleteImage(image)
                  closeModalUfAllImagesDeleted()
                } }
                activeOpacity={ 1 }
            >
                <Image
                    source={ { uri: image } }
                    key={ index }
                    resizeMode="contain"
                    style={ styles.carouselImage }
                />
            </TouchableOpacity>
        )
    }

    function renderThumbnails(image, index) {
        return (
            <TouchableOpacity activeOpacity={ 0.9 } onPress={() => onTouchThumbnail(index)}>
                <Image
                    source={ { uri: image } }
                    style={{
                        ...styles.thumbnailImage,
                        borderWidth: index === indexSelected ? 4 : 0.75,
                        borderColor: index === indexSelected ? 'orange' : 'white'
                    }}
                />
            </TouchableOpacity>
        );
    }

    function closeModal() {
        setIndexSelected(0)
        setIsModalVisible(false)
    }

    function openModal(i) {
        setIndexSelected(i)
        setIsModalVisible(true);
    }

    function renderImages() {
        if (!imageUriArray) return null;

        return imageUriArray.map(({ imageUri }, index) => {
            return (
                <TouchableOpacity
                    style={ styles.renderImageContainer }
                    onPress={() => openModal(index)}
                    key={ index }
                    activeOpacity={1}
                >
                    <Image
                        style={ styles.renderImage }
                        source={ { uri: imageUri } }
                    />
                </TouchableOpacity>
            )
        })
    }

    function renderNoImgsTxt() {
        return (
            <View style={ styles.NoImgWrapper }>
                <Text style={ styles.NoImg }>
                    { getIsLV(language) ? LV.PressToAddImage : 'Press + to add image' }
                </Text>
            </View>
        );
    }

    function renderImagesBlock() {
        if (!imageUriArray || !imageUriArray.length) {
            return renderNoImgsTxt();
        }

        return (
            <>
                <ScrollView>
                    <View style={ styles.renderImageScrollViewWrapper }>
                        { renderImages() }
                    </View>
                </ScrollView>
                <View
                    style={ styles.renderImagesCounter }
                >
                    { imageUriArray && <Text style={{ color: '#fff', fontWeight: 'bold'}}>{ `${ imageUriArray.length } / 10` }</Text> }
                </View>
            </>
        );
    }

    return (
        <View>
            <LogoComponent />
            <View style={ styles.container }>
                { renderImagesBlock() }
            </View>
            <GestureRecognizer
              onSwipeDown={ () => closeModal() }
            >
                <Modal
                    animationType="slide"
                    transparent
                    visible={ isModalVisible }
                    onRequestClose={() => setIsModalVisible(false) }
                    statusBarTranslucent={ true }
                >
                    <View style={ styles.modalContainer }>
                        <TouchableOpacity style={ styles.modalCloseButton }>
                            <AntDesign
                                name="closecircleo"
                                size={24}
                                color="#fff"
                                onPress={ () => closeModal() }
                            />
                        </TouchableOpacity>
                        { imageUriArray && (
                            <Carousel
                                firstItem={ indexSelected }
                                initialNumToRender={ 10 }
                                data={ imageUriArray }
                                renderItem={({ item: { imageUri }, index }) => renderItem(imageUri, index)}
                                sliderWidth={ width }
                                itemWidth={ width }
                                onSnapToItem={ index => onSelect(index) }
                                ref={ carouselRef }
                            />
                        )}
                        { imageUriArray && (
                            <FlatList
                                data={ imageUriArray }
                                renderItem={({ item: { imageUri }, index }) => renderThumbnails(imageUri, index)}
                                horizontal
                                style={{ position: 'absolute', bottom: 40 }}
                                showsHorizontalScrollIndicator={ false }
                                contentContainerStyle={{ paddingHorizontal: 10 }}
                                keyExtractor={ item => item.id }
                                ref={ flatListRef }
                            />
                        )}
                    </View>
                </Modal>
            </GestureRecognizer>
            <AddImage />
        </View>
    );
};

export default ImagesComponent;