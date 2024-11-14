import { useState } from "react"
import { useSemesterContext } from "../hooks/useSemesterContext"
import { useAuthContext } from "../hooks/useAuthContext"

const SemesterForm = ({ refetchSemesters }) => {
    const { dispatch } = useSemesterContext()
    const { admin } = useAuthContext()
    const [sem, setSem] = useState('')
    const [year, setYear] = useState('')
    const [error, setError] = useState(null)

    const performSubmit = async (e) => {
        e.preventDefault()

        if (!admin) {
            setError('You must be logged in');
            return;
        }

        const semester = {sem, year}

        const response = await fetch('api/semesters', {
            method: 'POST',
            body: JSON.stringify(semester),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${admin.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setSem('')
            setYear('')
            setError(null)
            console.log('new semester added', json)
            dispatch({type: 'CREATE_SEMESTER', payload: json})
            refetchSemesters()
        }
    }

    return (
        <form className="adminForm" onSubmit={performSubmit}>
            <h3>Input Competition Semester Info</h3>

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

            <button>Add Semester</button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default SemesterForm