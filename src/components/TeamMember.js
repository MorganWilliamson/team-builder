import React from 'react';
import styled from 'styled-components';

const StyledTM = styled.div`
    background: red;
`

export default function TeamMember(props) {
    const {details} = props;

    if(!details) {
        return <h3>Fetching your details. . .</h3>
    }

    return (
        <div className="teamMember container">
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}