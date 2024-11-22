import { useState } from "react";
import { usePhotoContext } from '../hooks/usePhotoContext';
import { useAuthContext } from '../hooks/useAuthContext';

const PhotoForm = ({ refetchPhotos }) => {
    const { dispatch } = usePhotoContext();
    const { admin } = useAuthContext();
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const performSubmit = async (e) => {
        e.preventDefault();

        if (!admin) {
            setError('You must be logged in');
            return;
        }

        const formData = new FormData();
        if (image) formData.append('image', image); // Attach image if selected

        const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/photos', {
            method: 'POST',
            body: formData, // For mixed data (text + file)
            headers: {
                'Authorization': `Bearer ${admin.token}`
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setImage(null);
            setError(null);
            dispatch({ type: 'CREATE_PHOTO', payload: json });
            refetchPhotos();
        }
    };

    return (
        <form className="admin-form" onSubmit={performSubmit} encType="multipart/form-data">
            <h3>Input a New Image for Your Gallery</h3>

            <label>Image: </label>
            <input 
                type="file"
                onChange={handleImageChange} // Handle file selection
                accept="image/*"
            />

            <button>Add Photo</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default PhotoForm;