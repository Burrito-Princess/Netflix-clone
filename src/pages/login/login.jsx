import React, { useState, useEffect } from 'react';
import $ from "jquery";

function Login(){
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
 
    const handleChange = (e) => {
        setName(e.target.value);
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
 
    return (
        <div className="App">
            <form
                action="src/pages/login/php/server.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) =>
                        handleChange(event)
                    }
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}

export default Login;
