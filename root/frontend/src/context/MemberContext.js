import { createContext, useReducer } from "react"

export const MemberContext = createContext()

export const memberReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MEMBERS':
            return {
                members: action.payload
            }
        case 'CREATE_MEMBER':
            return {
                members: [action.payload, ...state.members]
            }
        case 'DELETE_MEMBER':
            return {
                members: state.members.filter((e) => e._id !== action.payload._id)
            }
        case 'UPDATE_MEMBER':
            return {
                members: state.members.map((member) =>
                    member._id === action.payload._id ? action.payload : member
                )
            };
        default:
            return state
    }
}

export const MemberContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(memberReducer, {
        members: null,
    })

    return (
        <MemberContext.Provider value={{...state, dispatch}}>
            { children }
        </MemberContext.Provider>
    )
}