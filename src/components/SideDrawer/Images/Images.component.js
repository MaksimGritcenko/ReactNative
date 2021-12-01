import React, {useRef, useState} from "react";
import {
    Dimensions, FlatList, Image, Modal,
    Text, TouchableOpacity,
    View, ScrollView
} from "react-native";
import MainComponent from "../../Main/Main.component";
import Carousel  from 'react-native-snap-carousel';
import {AntDesign} from "@expo/vector-icons";
import AddImage from "../../AddImage";
import { styles } from "./Images.style";

const { width } = Dimensions.get('window');

export const ImagesComponent = ({ imageUriArray, deleteImage }) => {
    const [ indexSelected, setIndexSelected] = useState(0);
    const carouselRef = useRef();
    const flatListRef = useRef();
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

    return (
        <MainComponent>
            <View style={ styles.container }>
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
            </View>
            <Modal
                animationType="slide"
                transparent
                visible={ isModalVisible }
                onRequestClose={() => setIsModalVisible(false) }
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
            <AddImage />
        </MainComponent>
    );
};

export default ImagesComponent;