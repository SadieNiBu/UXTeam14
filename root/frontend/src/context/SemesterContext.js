import { createContext, useReducer } from "react"

export const SemesterContext = createContext()

export const semesterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SEMESTERS':
            return {
                semesters: action.payload
            }
        case 'CREATE_SEMESTER':
            return {
                semesters: [action.payload, ...state.semesters]
            }
        case 'DELETE_SEMESTER':
            return {
                semesters: state.semesters.filter((e) => e._id !== action.payload._id)
            }
        case 'UPDATE_SEMESTER':
            return {
                semesters: state.semesters.map((semester) =>
                    semester._id === action.payload._id ? action.payload : semester
                )
            };
        default:
            return state
    }
}

export const SemesterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(semesterReducer, {
        semesters: null
    })

    return (
        <SemesterContext.Provider value={{...state, dispatch}}>
            { children }
        </SemesterContext.Provider>
    )
}