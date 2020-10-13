import React from 'react';

export default function Form(props) {
    const {values, update, submit} = props;

    const onChange = event => {
        
        const {name, value} = event.target;

        update (name, value);
    };

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className="formContainer" onSubmit={onSubmit}> 
            <div className="form-inputs">
                <label>Name 
                    <input type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Enter your name!" 
                    maxLength="30"
                    />
                </label>

                <label>Email 
                    <input type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="Enter your email address!" 
                    maxLength="50"
                    />
                </label>

                <label>Role 
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value=" ">- Select Role -</option>
                        <option value="Front-End Designer">Front-End Designer</option>
                        <option value="Back-End Engineer">Back-End Engineer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="iOS Specialist">iOS Specialist</option>
                        <option value="Android Specialist">Android Specialist</option>
                    </select>
                </label>
                <button disabled={!values.name || !values.email || !values.role}>
                    Join Our Team!
                </button>
            </div>
        </form>
    );
};