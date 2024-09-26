import { MemberContext } from "../context/MemberContext"
import { useContext } from "react"

export const useMemberContext = () => {
    const context = useContext(MemberContext)

    if (!context) {
        throw Error("there has been an error within useMemberContext")
    }

    return context
}