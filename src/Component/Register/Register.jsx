import { useContext, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provaider/AuthProvaider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';

const Register = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = async () => {
        try {
         await signInWithPopup(auth, provider);
         toast("GoogleLogin Successfully!");
        }catch(error) {
            console.error("Google Login Error:", error)
        }
    }
    const [registerArror, setRegijsterArror] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();

    const { createUser } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        const accept = form.get('terms')
        console.log(name, email, photo, password, accept);
        setRegijsterArror("");

        if (password.length < 6) {
            setRegijsterArror(' Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegijsterArror('Passwor Shuld be At Least One UpperCasse Caractaars')
            return;
        }
        else if (!accept) {
            setRegijsterArror('Please Accept Our Terms And Conditions')
            return;
        }
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast('Email Create Successfuly!')
                // navigate("/login")
            })
            .catch(error => {
                console.error(error)
                setRegijsterArror(error.message)
            })
    }

    return (
        <div>
            <div className='bg-[#36d399] rounded-lg'>
                <form onSubmit={handleRegister} className="p-5 md:w-3/4 lg:w-1/2 mx-auto">
                    <h1 className="md:mx-24 text-center text-3xl font-bold mt-5">Please Register Now !!</h1>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text"> Your Name</span>
                        </label>
                        <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="Email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" required placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} name="password" required placeholder="Password" className="input input-bordered" />
                        <span className="absolute mt-[51px] right-[450px]" onClick={() => setShowPassword(!showPassword)} >
                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }
                        </span>
                        <div>
                            <h1 className="text-xl font-bold mt-4">Login With</h1>
                            <button onClick={handleGoogleLogin} className="btn btn-outline rounded-b mt-4 w-40 lowercase">
                                <FaGoogle></FaGoogle>
                                Google
                            </button>
                            <br />
                            <button className="btn btn-outline rounded-t w-40 lowercase">
                                <FaGithub></FaGithub>
                                GitHub
                            </button>
                        </div>
                        <br />
                        <a href="#" className="label-text-alt link link-hover mt-4">Forgot password?</a>
                        <label className="label">
                            <input className="text-start mt-5" type="checkbox" name="terms" id="terms" />
                            <br />
                        </label>
                    </div>
                    <div className='form-control mt-6'>
                        <button className="btn btn-primary">Register</button>
                    </div>
 <ToastContainer position="top-center" autoClose={1000} />
                    <p className="text-center mt-4">Already Have an Account ? <Link className="text-blue-700 font-bold" to="/login">Login</Link></p>
                    {
                        registerArror && <p className="text-red-500 text-center">{registerArror}</p>
                    }
                    {/* {
                        success && <p className="text-blue-800 text-center">{success}</p>
                    } */}
                </form>
            </div>
        </div>
    );
};
export default Register;



