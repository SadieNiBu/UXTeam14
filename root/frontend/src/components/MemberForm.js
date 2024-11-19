import { useState } from "react";
import { useMemberContext } from '../hooks/useMemberContext';
import { useAuthContext } from '../hooks/useAuthContext';

const MemberForm = ({ refetchMembers }) => {
    const { dispatch } = useMemberContext();
    const { admin } = useAuthContext();
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [classification, setClassification] = useState('Student');
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
        formData.append('name', name);
        formData.append('role', role);
        formData.append('classification', classification);
        if (image) formData.append('image', image); // Attach image if selected

        const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/members', {
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
            setName('');
            setRole('');
            setClassification('Student');
            setImage(null);
            setError(null);
            dispatch({ type: 'CREATE_MEMBER', payload: json });
            refetchMembers();
        }
    };

    return (
        <form className="admin-form" onSubmit={performSubmit} encType="multipart/form-data">
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

            <label>Member Classification: </label>
            <select
                value={classification}
                onChange={(e) => setClassification(e.target.value)}
            >
                <option value="Student">Student</option>
                <option value="Coach">Coach</option>
            </select>

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