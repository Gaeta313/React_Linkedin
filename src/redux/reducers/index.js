import {
    // SET_DARK_THEME,
    // SET_LIGHT_THEME,
    SET_ME,
    UPDATE_ME,
    GET_ALL_USERS,
    GET_ALL_EXPERIENCES,
    POST_NEW_EXPERIENCES,
    PUT_EXPERIENCES,
    SET_EXP_ID,
    GET_EXPERIENCE,
    GET_ALL_COMMENTS,
    SET_COMMENT_BY_ID,
    SET_MY_LAST_COMMENTS,
    SET_LOADER,
    SET_LOADER_COMMENTS,
} from "../action";

const initialState = {
    user: {
        me: null,
        experiences: [],
        expId: "",
        singleExp: null,
    },

    loader:false,
    loaderComment:false,

    users: { allUsers: [] },
    comments: {
        allComments: [],
        commentsById: null,
        myLastComments: [],
    },
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ME:
            return {
                ...state,
                user: {
                    ...state.user,
                    me: action.payload,
                },
            };
        // case SET_LIGHT_THEME:
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             theme: action.payload,
        //         },
        //     };
        // case SET_DARK_THEME:
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             theme: action.payload,
        //         },
        //     };
        case GET_ALL_USERS:
            return {
                ...state,
                users: {
                    ...state.users,
                    allUsers: action.payload,
                },
            };
        case GET_ALL_COMMENTS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    allComments: action.payload,
                },
            };

        case UPDATE_ME:
            return {
                ...state,
                user: {
                    ...state.user,
                    me: action.payload,
                },
            };

        case SET_MY_LAST_COMMENTS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    myLastComments: action.payload,
                },
            };

        case GET_ALL_EXPERIENCES:
            return {
                ...state,
                user: {
                    ...state.user,
                    experiences: action.payload,
                },
            };

        case POST_NEW_EXPERIENCES:
            return {
                ...state,
                user: {
                    ...state.user,
                    experiences: [...state.user.experiences, action.payload],
                },
            };

        case SET_EXP_ID:
            return {
                ...state,
                user: {
                    ...state.user,
                    expId: action.payload,
                },
            };
        case GET_EXPERIENCE:
            return {
                ...state,
                user: {
                    ...state.user,
                    singleExp: action.payload,
                },
            };

        case SET_COMMENT_BY_ID:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    commentsById: action.payload,
                },
            };

        case SET_LOADER:
            return {
                ...state,
                loader: action.payload,
            }

            case SET_LOADER_COMMENTS:
                return {
                    ...state,
                    loaderComment: action.payload,
                }

        default:
            return state;
    }
};

export default mainReducer;
