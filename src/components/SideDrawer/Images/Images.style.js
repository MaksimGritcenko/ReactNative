import { Dimensions, StyleSheet, Platform } from "react-native";
import { CONTENT_PADDING_TOP } from '../../../constants/Layout';
import { darkBlue } from "../../../constants/Colors";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        paddingTop: CONTENT_PADDING_TOP,
        height: '60%',
        width: '100%',
        alignSelf: "center",
    },
    renderImageScrollViewWrapper: {
        marginHorizontal: '2%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 60,
        justifyContent: 'space-between'
    },
    renderImagesCounter: {
        position: "absolute",
        bottom: 0,
        width: width,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    renderImageContainer: {
        borderRadius: 10,
        width: '44%',
        height: height/ 5,
        margin: 10
    },
    renderImage: {
        ...StyleSheet.absoluteFill,
        width: undefined,
        height: undefined,
        borderRadius: 30
    },
    modalContainer: {
        flex: 1,
        backgroundColor: darkBlue,
        borderWidth: 2,
        paddingTop: Platform.OS === 'ios' ? 0 : 17,
    },
    modalCloseButton: {
        position: "absolute",
        right: 20,
        top: Platform.OS === 'ios' ? 30 : 40,
        zIndex: 10,
        backgroundColor: darkBlue
    },
    thumbnailImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 16,
    },
    carouselImage: {
        width: '95%',
        height: '80%',
        top: 30,
        alignSelf: 'center'
    },
    NoImgWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    NoImg: {
        color: 'rgba(220, 220, 220, 1)',
        fontSize: 16
    }
});