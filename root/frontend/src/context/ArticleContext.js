import { createContext, useReducer } from "react";

export const ArticleContext = createContext();

export const articleReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ARTICLES':
            return {
                articles: action.payload
            };
        case 'CREATE_ARTICLE':
            return {
                articles: [action.payload, ...state.articles]
            };
        case 'DELETE_ARTICLE':
            return {
                articles: state.articles.filter((article) => article._id !== action.payload._id)
            };
        case 'UPDATE_ARTICLE':
            return {
                articles: state.articles.map((article) =>
                    article._id === action.payload._id ? action.payload : article
                )
            };
        default:
            return state;
    }
};

export const ArticleContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(articleReducer, {
        articles: null
    });

    return (
        <ArticleContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ArticleContext.Provider>
    );
};
