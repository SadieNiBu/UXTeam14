const MemberDetails = ({ member }) => {

    const performDelete = async () => {
        const response = await fetch('/api/members/' + member._id, {
            method: 'DELETE'
        })

        const json = await response.json()
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