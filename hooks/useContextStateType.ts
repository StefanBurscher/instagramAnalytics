import { useEffect, useState } from 'react';
import localstorage from '../utils/localstorage';

export default function useContextState(initialState, initialIndex, localstorageKey) {
    const [stateValue, setStateValue] = useState(initialState);
    const [stateIndex, setStateIndex] = useState(initialIndex);

    const setAllValues = (values) => {
        localstorage.setContextData(localstorageKey, setStateValue, values);
    };

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                let initialValue = await localstorage.getData(localstorageKey);

                const hasLocalstorageValue =
                    !initialValue ||
                    (initialValue && initialValue && initialValue.lenght === 0);

                if (hasLocalstorageValue) {
                    initialValue = initialState;
                }

                setAllValues(initialValue);

            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                // setLoadingComplete(true);
                // SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return {
        data: [stateValue, setAllValues],
        indexes: [stateIndex, setStateIndex]
    };
}

