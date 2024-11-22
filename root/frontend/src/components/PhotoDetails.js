import { useState, useEffect } from "react";
import { usePhotoContext } from "../hooks/usePhotoContext";
import { useAuthContext } from "../hooks/useAuthContext";

const PhotoDetails = ({ photo, refetchPhotos }) => {
    const { dispatch } = usePhotoContext();
    const { admin } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const performDelete = async () => {
        if (!admin) return;
        const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/photos/' + photo._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${admin.token}`
            }
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_PHOTO', payload: json });
        }
    };

    const performUpdate = async (e) => { 
        e.preventDefault();

        if (!admin) return;

        const formData = new FormData();
        if (image) formData.append('image', image); // Attach image file if selected

        const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/photos/' + photo._id, {
            method: 'PATCH',
            body: formData,
            headers: {
                'Authorization': `Bearer ${admin.token}`
            }
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'UPDATE_PHOTO', payload: json });
            setIsEditing(false);
            refetchPhotos();
        }
    };

    return (
        <div className="photoDetails">
            {isEditing ? (
                <form onSubmit={performUpdate} encType="multipart/form-data">
                    <label>Image: </label>
                    <input 
                        type="file"
                        onChange={handleImageChange} // Handle image file selection
                        accept="image/*"
                    />
                    
                    {photo.imageUrl && <img src={photo.imageUrl} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />} {/* Display image preview */}

                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    {photo.imageUrl && <img src={photo.imageUrl} style={{ width: '100px' }} />} {/* Display current image */}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <span onClick={performDelete}>
                        <button>Delete</button>
                    </span>
                </>
            )}
        </div>
    );
};

export default PhotoDetails;