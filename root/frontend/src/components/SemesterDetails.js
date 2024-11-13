import { useSemesterContext } from "../hooks/useSemesterContext";
import { useAuthContext } from "../hooks/useAuthContext";

const SemesterDetails = ({ semester }) => {
    const { dispatch } = useSemesterContext()
    const { admin } = useAuthContext()
    
    const performDelete = async () => {
        if (!admin) return;
        
        const response = await fetch ('api/semesters/' + semester._id, {
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
    
    return (
        <div className="semesterDetails">
            <p><strong>Semester: </strong>{semester.sem}</p>
            <p><strong>Year: </strong>{semester.year}</p>
            <span onClick={performDelete}>
                <button>Delete</button>
            </span>
        </div>
    )
}

export default SemesterDetails