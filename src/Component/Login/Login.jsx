import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import Navbar from "../Navbar/Navbar";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
    }
    const [showPassword, setShowPassword] = useState("");
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext)
    const locatiion = useLocation();
    const navigate = useNavigate()

    const from = locatiion.state?.from?.pathname || "/"
    console.log(from)
    // console.log('Location in The Login Page', locatiion)

    const handleLogin = async (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        // const form = new FormData(e.currentTarget);
        // const email = form.get('email')
        // const password = form.get('password')
        // console.log(email, password);
        // signIn(email, password)
        const emmail = e.target.email.value;
        const password = e.target.password.value;
        try {
            const result = await signIn(emmail, password);
            console.log(result.user);
            navigate(from, { replace: true });
        } catch (error) {
            console.error("login error:", error);
            setError("Invalid Password & Email");
        }
        // .then(result => {
        //     console.log(result.user)
        //     setSuccess('Login Create Successfuly!')
        //     // Navigate After login
        //     navigate(locatiion?.state ? locatiion.state : "/")
        // })
        // .catch(error => {
        //     console.error(error)
        // })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className=" rounded-lg mt-5 bg-[#36d399]">
                    <form onSubmit={handleLogin} className="p-5 md:w-3/4 lg:w-1/2 mx-auto">
                    <h1 className="text-center text-3xl font-bold">Please Login Now !!</h1>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover mt-4">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Login With</h1>
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center mt-4">Do Not Have Account ? <Link className="text-blue-700 font-bold" to="/register">Register</Link></p>
                    </form>
                    {
                        error && <p className="text-red-500 text-center">{error}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;