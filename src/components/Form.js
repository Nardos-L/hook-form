import React from 'react';

const Form = (props) => {
    const { inputs, setInputs } = props;
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form-container">
            <form >
                <div className="form-group" >
                    <label htmlFor="firstName">firstName: </label>
                    <input type="text" name="firstName" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">lastName: </label>
                    <input type="text" name="lastName" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address: </label>
                    <input type="text" name="email" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">confirmPassword: </label>
                    <input type="password" name="confirmPassword" onChange={onChange} />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>

    );
};

export default Form;