import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useArticleContext } from "../hooks/useArticleContext";

const ArticleDetails = ({ article, refetchArticles }) => {
    const { dispatch } = useArticleContext();
    const { admin } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(article.title);
    const [author, setAuthor] = useState(article.author);
    const [date, setDate] = useState(article.date);
    const [url, setUrl] = useState(article.url);

    useEffect(() => {
        setTitle(article.title);
        setAuthor(article.author);
        setDate(article.date);
        setUrl(article.url);
    }, [article]);

    const performDelete = async () => {
        if (!admin) return;

        const response = await fetch(`https://ucf-c3-team-website-api.onrender.com/api/articles/${article._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${admin.token}`,
            },
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_ARTICLE", payload: json });
        }
    };

    const performUpdate = async (e) => {
        e.preventDefault();

        if (!admin) return;

        const updatedArticle = { title, author, date, url };

        const response = await fetch(`https://ucf-c3-team-website-api.onrender.com/api/articles/${article._id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedArticle),
            headers: {
                Authorization: `Bearer ${admin.token}`,
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: "UPDATE_ARTICLE", payload: json });
            setIsEditing(false);
            refetchArticles();
        }
    };

    return (
        <div className="articleDetails">
            {isEditing ? (
                <form onSubmit={performUpdate}>
                    <label>Title:</label>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                    <label>Author:</label>
                    <input
                        type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />

                    <label>Date:</label>
                    <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={new Date(date).toISOString().split("T")[0]}
                    />

                    <label>URL:</label>
                    <input
                        type="text"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />

                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <p><strong>Title:</strong> {title}</p>
                    <p><strong>Author:</strong> {author}</p>
                    <p><strong>Date:</strong> {new Date(date).toLocaleDateString(undefined, { timeZone: 'UTC' })}</p>
                    <p><strong>URL:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={performDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default ArticleDetails;
