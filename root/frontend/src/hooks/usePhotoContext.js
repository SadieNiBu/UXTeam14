import { PhotoContext } from "../context/PhotoContext"
import { useContext } from "react"

export const usePhotoContext = () => {
    const context = useContext(PhotoContext)

    if (!context) {
        throw Error("there has been an error within useMemberContext")
    }

    return context
}