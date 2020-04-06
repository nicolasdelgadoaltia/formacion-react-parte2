import React, { useState } from "react";

const completeForm = (email, name) => email !== "" && name !== "";

const CreateForm = ({ onCreateUser }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [active, setActive] = useState(false);

    const createUserButtonActive = completeForm(email,name);

    return (<div>
        <h3>Crear usuario:</h3>
        <label>
            Email:<br/>
            <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
        </label><br/><br/>
        <label>
            Name:<br/>
            <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label><br/><br/>
        <label>
            Active:
            <input type="checkbox" value={active} onChange={event => setActive(event.target.value)} />
        </label><br/><br/><br/>
        <button
            style={{ opacity: createUserButtonActive ? 1 : 0.3 }}
            disabled={!createUserButtonActive}
            onClick={() => onCreateUser({ email, name, active})}
        >
            Create user
        </button>
</div>);
}

export default CreateForm;