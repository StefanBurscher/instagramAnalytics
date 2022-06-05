import { initialGroupIndexState, initialGroupsState, initialHashtagCategoriesState, initialHashtagIndexState } from '../constants/initialState';
import useContextState from './useContextStateType';

export default function useContextApi() {
    const groupContext = useContextState(
        initialGroupsState,
        initialGroupIndexState,
        "all-groups"
    );

    const hashtagContext = useContextState(
        initialHashtagCategoriesState,
        initialHashtagIndexState,
        "all-hashtag-categories"
    );

    return { groups: groupContext, hashtags: hashtagContext };
}

