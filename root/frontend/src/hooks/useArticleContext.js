import { ArticleContext } from "../context/ArticleContext"
import { useContext } from "react"

export const useArticleContext = () => {
    const context = useContext(ArticleContext)

    if (!context) {
        throw Error("there has been an error within useArticleContext")
    }

    return context
}