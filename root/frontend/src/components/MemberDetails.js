import { useState, useEffect } from "react";
import { useMemberContext } from "../hooks/useMemberContext";

const MemberDetails = ({ member, refetchMembers }) => {
    const { dispatch } = useMemberContext();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(member.name);
    const [role, setRole] = useState(member.role);

    useEffect(() => {
        setName(member.name);
        setRole(member.role);
    }, [member]);

    const performDelete = async () => {
        const response = await fetch('/api/members/' + member._id, {
            method: 'DELETE'
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_MEMBER', payload: json});
        }
    };

    const performUpdate = async (e) => { 
        e.preventDefault();

        const updatedMember = { name, role };

        const response = await fetch('/api/members/' + member._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedMember)
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'UPDATE_MEMBER', payload: json});
            setIsEditing(false);
            refetchMembers();
        }
    };

    return (
        <div className="memberDetails">
            {isEditing ? (
                <form onSubmit={performUpdate}>
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

                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <p><strong>Name: </strong>{name}</p>
                    <p><strong>Role: </strong>{role}</p>
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