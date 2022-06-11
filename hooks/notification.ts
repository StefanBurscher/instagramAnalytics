// import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import { registerForPushNotificationsAsync } from "../utils/notification";

export default function usePushNotifications() {
  const [state, setState] = useState("");

  // const notificationListener = useRef();
  // const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync(setState)

    // // This listener is fired whenever a notification is received while the app is foregrounded
    // notificationListener.current =
    //   Notifications.addNotificationReceivedListener((notification) => {
    //     setNotification(notification);
    //   });

    // // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    // responseListener.current =
    //   Notifications.addNotificationResponseReceivedListener((response) => {
    //     console.log(response);
    //   });

    // return () => {
    //   Notifications.removeNotificationSubscription(
    //     notificationListener.current
    //   );
    //   Notifications.removeNotificationSubscription(responseListener.current);
    // }

  }, [])

  return state;
};
