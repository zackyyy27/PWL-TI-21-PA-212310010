import React from 'react';

const SignIn = () => {
    return (
        <div className="bg-primary p-3 mb-2 vh-100" >
            <main className="p-3 form-signin w-100 m-auto bg-white rounded-3">
                <form>
                    <h1 className="mb-3 fw-bold text-center ">Sign in</h1>
                    <h5 className='mb-3 text-secondary text-center '>Enter Using your Ibik Account </h5>
                    <div className="mb-3 form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="mb-3 form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    );
}

export default SignIn;
