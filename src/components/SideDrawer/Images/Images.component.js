import React, {useRef, useState} from "react";
import {
    Dimensions, FlatList, Image, Modal,
    Text, TouchableOpacity,
    View
} from "react-native";
import MainComponent from "../../Main/Main.component";
import Carousel  from 'react-native-snap-carousel';
import {AntDesign} from "@expo/vector-icons";
import AddImage from "../../AddImage";

const { width } = Dimensions.get('window');
const Spacing = 10;
const THUMB_SIZE = 80;

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
            offset: indexSelected * THUMB_SIZE,
            animated: true
        })
    };

    function renderItem(image, index) {
        return (
            <TouchableOpacity
                style={{ top: 50 }}
                onLongPress={() => deleteImage(image) }
                activeOpacity={ 1 }
            >
                <Image
                    source={ { uri: image } }
                    key={ index }
                    resizeMode="contain"
                    style={{ width: '95%', height: '80%', top: 30, alignSelf: 'center' }}
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
                        width: THUMB_SIZE,
                        height: THUMB_SIZE,
                        marginRight: Spacing,
                        borderRadius: 16,
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

    function openModal() {
        setIsModalVisible(true);
    }

    function renderImages() {
        if (!imageUriArray) return null;

        return imageUriArray.map(({ imageUri }, index) => {
            return (
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 30 + (index * 20),
                        borderRadius: 10
                    }}
                    onPress={() => openModal()}
                    key={ index }
                    activeOpacity={1}
                >
                    <Image
                        style={{
                            width: 300,
                            height: 400,
                            borderTopRightRadius: 30,
                            borderTopLeftRadius: 30,
                            opacity: index !== imageUriArray.length - 1 ? 0.6 : 1,
                        }}
                        source={ { uri: imageUri } }
                    />
                </TouchableOpacity>
            )
        })
    }

    return (
        <MainComponent>
            <View style={{
                height: '100%',
                width: '100%',
                alignSelf: "center",
                alignItems:'center',
                backgroundColor: 'rgba(0,0,0,0.6)'
            }}>
                { renderImages() }
                <View style={{ position: "absolute", bottom: 20}}>
                    { imageUriArray && <Text style={{ color: 'red'}}>You have uploaded { imageUriArray.length } / 10</Text> }
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent
                visible={ isModalVisible }
                onRequestClose={() => setIsModalVisible(false) }
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0, 0.5)'}}>
                    <TouchableOpacity style={{ position: "absolute", right: 20, top: 17, zIndex: 10, backgroundColor: "#000"}}>
                        <AntDesign
                            name="closecircleo"
                            size={24}
                            color="#fff"
                            onPress={ () => closeModal() }
                        />
                    </TouchableOpacity>
                    { imageUriArray && (
                        <Carousel
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
                            contentContainerStyle={{ paddingHorizontal: Spacing }}
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