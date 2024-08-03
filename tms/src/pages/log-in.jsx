
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [email, set_email] = useState("");
    const [pass, set_pass] = useState("");


    function handel_signup(e) {
        e.preventDefault();


        let user = {
            email: email,
            pass: pass
        };

        sessionStorage.setItem("use_data", JSON.stringify(user));

        alert("Signed successfully!!!");

        set_email("");
        set_pass("");

        // sessionStorage.setItem("signed", true);

        navigate("/");
    }

    return (
        <>
            <main className="h-[77vh] flex justify-center items-center">
                <form className="flex-col justify-center items-center w-[50%]" onSubmit={handel_signup} id="sign_form">

                    <label htmlFor="">Email :
                        <br />
                        < input className="h-10 w-[90%] bg-[#f7ff65] p-3 mx-2 my-4 rounded-md" type="email"
                            id="email"
                            value={email}
                            onChange={(e) => { set_email(e.target.value) }}
                            required

                        />
                    </label>

                    <label htmlFor="">Password :
                        <br />
                        < input className="h-10 w-[90%] bg-[#f7ff65] p-3 mx-2 my-4 rounded-md" type="password"
                            id="pass"
                            value={pass}
                            onChange={(e) => { set_pass(e.target.value) }}
                            required

                        />
                    </label>

                    <div className=" w-[90%] flex justify-center items-center">
                        <button className="bg-[#f7ff65] m-4 px-7 py-2 rounded-md text-[#000000] w-[50%] " type="submit">Sign up</button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Signup;