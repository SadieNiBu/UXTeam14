import { useState } from "react"
import { useMemberContext } from '../hooks/useMemberContext'

const MemberForm = () => {
    const { dispatch } = useMemberContext()

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState(null)

    const performSubmit = async (e) => {
        e.preventDefault()

        const member = {name, role}

        const response = await fetch('/api/members', {
            method: 'POST',
            body: JSON.stringify(member),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setRole('')
            setError(null)
            console.log('new member added', json)
            dispatch({type: 'CREATE_MEMBER', payload: json})
        }
    }

    return (
        <form className="adminForm" onSubmit={performSubmit}>
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

            <button>Add Member</button>
        </form>
    )
}


export default MemberForm