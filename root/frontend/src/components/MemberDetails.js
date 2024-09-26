import { useMemberContext } from "../hooks/useMemberContext"

const MemberDetails = ({ member }) => {
    const { dispatch } = useMemberContext()

    const performDelete = async () => {
        const response = await fetch('/api/members/' + member._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_MEMBER', payload: json})
        }
    }

    return (
        <div className="memberDetails">
            <p><strong>Name: </strong>{member.name}</p>
            <p><strong>Role: </strong>{member.role}</p>
            <span onClick={performDelete}>
                <button>Delete</button>
            </span>
        </div>
    )
}

export default MemberDetails