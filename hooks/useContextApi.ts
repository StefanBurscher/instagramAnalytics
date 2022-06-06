import { getInitialChecklistState, initialCommentsState, initialGroupIndexState, initialGroupsState, initialHashtagCategoriesState, initialHashtagIndexState } from '../constants/initialState';
import useContextState from './useContextStateType';

export default function useContextApi() {
    const groupContext = useContextState(
        "all-groups",
        initialGroupsState,
        initialGroupIndexState,
    );

    const hashtagContext = useContextState(
        "all-hashtag-categories",
        initialHashtagCategoriesState,
        initialHashtagIndexState,
    );

    const commentsContext = useContextState(
        "comments",
        initialCommentsState,
    );

    const checklistContext = useContextState(
        "checklist",
        getInitialChecklistState(),
    );

    return {
        groups: groupContext,
        hashtags: hashtagContext,
        comments: commentsContext,
        checklist: checklistContext
    };
}

