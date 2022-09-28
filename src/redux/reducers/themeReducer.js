import { SET_DARK_THEME, SET_LIGHT_THEME } from "../action";

const initialState = {
    theme: true,
    styles: {
        light: {
            backgroundColor: "white",
        },
        dark: {
            backgroundColor: "rgb(29, 34, 38)",
            color: "white",
        },
    },
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIGHT_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case SET_DARK_THEME:
            return {
                ...state,
                theme: action.payload,
            };

        default:
            return state;
    }
};

export default themeReducer;
