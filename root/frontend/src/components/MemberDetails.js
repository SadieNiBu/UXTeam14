import { useState, useEffect } from "react";
import { useMemberContext } from "../hooks/useMemberContext";

const MemberDetails = ({ member, refetchMembers }) => {
    const { dispatch } = useMemberContext();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(member.name);
    const [role, setRole] = useState(member.role);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(member.image ? `/${member.image}` : null); // For image preview

    useEffect(() => {
        setName(member.name);
        setRole(member.role);
        setPreview(member.image ? `/${member.image}` : null); // Update preview if member image changes
    }, [member]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const performDelete = async () => {
        const response = await fetch('/api/members/' + member._id, {
            method: 'DELETE'
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_MEMBER', payload: json });
        }
    };

    const performUpdate = async (e) => { 
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('role', role);
        if (image) formData.append('image', image); // Attach image file if selected

        const response = await fetch('/api/members/' + member._id, {
            method: 'PATCH',
            body: formData
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'UPDATE_MEMBER', payload: json });
            setIsEditing(false);
            refetchMembers();
        }
    };

    return (
        <div className="memberDetails">
            {isEditing ? (
                <form onSubmit={performUpdate} encType="multipart/form-data">
                    <label>Name: </label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Role: </label>
                    <input 
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />

                    <label>Image: </label>
                    <input 
                        type="file"
                        onChange={handleImageChange} // Handle image file selection
                    />
                    
                    {preview && <img src={preview} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />} {/* Display image preview */}

                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <p><strong>Name: </strong>{name}</p>
                    <p><strong>Role: </strong>{role}</p>
                    {preview && <img src={preview} alt={name} style={{ width: '100px' }} />} {/* Display current image */}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <span onClick={performDelete}>
                        <button>Delete</button>
                    </span>
                </>
            )}
        </div>
    );
};

export default MemberDetails;