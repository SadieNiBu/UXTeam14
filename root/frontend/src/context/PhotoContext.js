import { createContext, useReducer } from "react"

export const PhotoContext = createContext()

export const photoReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PHOTOS':
            return {
                photos: action.payload
            }
        case 'CREATE_PHOTO':
            return {
                photos: [action.payload, ...state.photos]
            }
        case 'DELETE_PHOTO':
            return {
                photos: state.photos.filter((e) => e._id !== action.payload._id)
            }
        case 'UPDATE_PHOTO':
            return {
                photos: state.photos.map((photo) =>
                    photo._id === action.payload._id ? action.payload : photo
                )
            };
        default:
            return state
    }
}

export const PhotoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(photoReducer, {
        photos: null,
    })

    return (
        <PhotoContext.Provider value={{...state, dispatch}}>
            { children }
        </PhotoContext.Provider>
    )
}