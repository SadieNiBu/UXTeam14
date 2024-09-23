const MemberDetails = ({ member }) => {
    return (
        <div className="memberDetails">
            <h2>Roster</h2>
            <p><strong>Name: </strong>{member.name}</p>
            <p><strong>Role: </strong>{member.role}</p>
        </div>
    )
}

export default MemberDetails