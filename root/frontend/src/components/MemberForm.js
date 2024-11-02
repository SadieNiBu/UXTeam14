import { useState } from "react";
import { useMemberContext } from '../hooks/useMemberContext';

const MemberForm = ({ refetchMembers }) => {
    const { dispatch } = useMemberContext();
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const performSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('role', role);
        if (image) formData.append('image', image); // Attach image if selected

        const response = await fetch('/api/members', {
            method: 'POST',
            body: formData // For mixed data (text + file)
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setName('');
            setRole('');
            setImage(null);
            setError(null);
            dispatch({ type: 'CREATE_MEMBER', payload: json });
            refetchMembers();
        }
    };

    return (
        <form className="adminForm" onSubmit={performSubmit} encType="multipart/form-data">
            <h3>Input a New Member to Your Roster</h3>

            <label>Member Name: </label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Member Role: </label>
            <input 
                type="text"
                onChange={(e) => setRole(e.target.value)}
                value={role}
            />

            <label>Member Image: </label>
            <input 
                type="file"
                onChange={handleImageChange} // Handle file selection
            />

            <button>Add Member</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default MemberForm;