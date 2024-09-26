import { EventContext } from "../context/EventContext"
import { useContext } from "react"

export const useEventContext = () => {
    const context = useContext(EventContext)

    if (!context) {
        throw Error("there has been an error within useEventContext")
    }

    return context
}