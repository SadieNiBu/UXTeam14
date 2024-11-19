import { useSemesterContext } from "../hooks/useSemesterContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState, useEffect } from "react";

const SemesterDetails = ({ semester, refetchSemesters }) => {
    const { dispatch } = useSemesterContext()
    const { admin } = useAuthContext()
    const [isEditing, setIsEditing] = useState(false);
    const [sem, setSem] = useState(semester.sem);
    const [year, setYear] = useState(semester.year);

    useEffect(() => {
        setSem(semester.sem);
        setYear(semester.year);
    }, [semester]);
    
    const performDelete = async () => {
        if (!admin) return;
        
        const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/semesters/' + semester._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${admin.token}`
            }
        })

        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_SEMESTER', payload: json})
        }
    }

    const performUpdate = async (e) => { 
        e.preventDefault();

        if (!admin) return;

        const updatedSemester = {sem, year}

        const response = await fetch('https://ucf-c3-team-website-api.onrender.com/api/semesters/' + semester._id, {
            method: 'PATCH',
            body: JSON.stringify(updatedSemester),
            headers: {
                'Authorization': `Bearer ${admin.token}`,
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'UPDATE_SEMESTER', payload: json });
            setIsEditing(false);
            refetchSemesters();
        }
    };
    
    return (
        <div className="semesterDetails">
            {isEditing ? (
                <form onSubmit={performUpdate} encType="multipart/form-data">
                    <label>Semester: </label>
                    <input 
                    type="text"
                    onChange={(e) => setSem(e.target.value)}
                    value={sem}
                    />

                    <label>Year: </label>
                    <input 
                    type="text"
                    onChange={(e) => setYear(e.target.value)}
                    value={year}
                    />
                    
                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <p><strong>Semester: </strong>{sem}</p>
                    <p><strong>Year: </strong>{year}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <span onClick={performDelete}>
                        <button>Delete</button>
                    </span>
                </>
            )}
        </div>
    );
}

export default SemesterDetails