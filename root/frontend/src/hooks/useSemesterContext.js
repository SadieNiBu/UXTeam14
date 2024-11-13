import { SemesterContext } from "../context/SemesterContext"
import { useContext } from "react"

export const useSemesterContext = () => {
    const context = useContext(SemesterContext)

    if (!context) {
        throw Error("there has been an error within useSemesterContext")
    }

    return context
}