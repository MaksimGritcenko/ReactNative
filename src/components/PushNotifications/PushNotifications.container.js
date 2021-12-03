import React, {useEffect, useRef, useState} from "react";
import { connect } from "react-redux";

import PushNotificationsComponent from "./PushNotifications.component";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { sendNotificationsToAllTokensFromFirebase } from "../../utils/Query";
import {ANDROID_PLATFORM, FAILED_TOKEN_FETCHING, PHYSICAL_DEVICE, STATUS_GRANTED} from "./PushNotifications.config";

export const mapStateToProps = state => ({
    tokens: state.PushNotifications.tokens,
    language: state.UserReducer.language
});

export const PushNotificationsContainer = ({ tokens, language }) => {
    async function sendPushNotification(title, text) {
        const message = tokens.map(({ data: { expoToken: { data } } }) => {
            return {
                to: data,
                sound: 'default',
                title: title,
                body: text
            }
        })

        await sendNotificationsToAllTokensFromFirebase(message)
    }

    return (
        <PushNotificationsComponent
            sendPushNotification={ sendPushNotification }
            language={ language }
        />
    );
}

export default connect(mapStateToProps, null)(PushNotificationsContainer);