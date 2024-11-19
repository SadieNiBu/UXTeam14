import { useState } from "react";
import { useArticleContext } from "../hooks/useArticleContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ArticleForm = ({ refetchArticles }) => {
    const { dispatch } = useArticleContext();
    const { admin } = useAuthContext();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [url, setUrl] = useState("");
    const [error, setError] = useState(null);

    const performSubmit = async (e) => {
        e.preventDefault();

        if (!admin) {
            setError("You must be logged in");
            return;
        }

        const article = { title, author, date, url };

        const response = await fetch("https://ucf-c3-team-website-api.onrender.com/api/articles", {
            method: "POST",
            body: JSON.stringify(article),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${admin.token}`,
            },
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        } else {
            setTitle("");
            setAuthor("");
            setDate("");
            setUrl("");
            setError(null);
            console.log("New article added", json);
            dispatch({ type: "CREATE_ARTICLE", payload: json });
            refetchArticles();
        }
    };

    return (
        <form className="admin-form" onSubmit={performSubmit}>
            <h3>Add a New Article</h3>

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
                value={date}
            />

            <label>URL (required):</label>
            <input
                type="text"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
            />

            <button>Add Article</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default ArticleForm;
