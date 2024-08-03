
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Trash, PencilOff } from 'lucide-react';

function Home() {


    const navigate = useNavigate();

    const [name, set_name] = useState("");
    const [email, set_email] = useState("");
    const [pass, set_pass] = useState("");


    function handel_signup(e) {
        e.preventDefault();


        let user = {
            name: name,
            email: email,
            pass: pass
        };

        sessionStorage.setItem("use_data", JSON.stringify(user));

        alert("Signed successfully!!!");

        set_name("");
        set_email("");
        set_pass("");

        sessionStorage.setItem("signed", true);

        navigate("/");
    }


    return (

        <>
            <main className='min-h-[77vh]'>
                <div className="tasks flex justify-center items-center flex-wrap">

                    <div className="task flex justify-between items-center bg-[#f7ff65] m-4 p-4 rounded-md  w-[45%]">
                        <input className='w-5 h-5 border-4 border-[#000000]' type="checkbox" name="" id="" />

                        <div className="">
                            <h3 className='text-xl font-semibold'>Task title</h3>
                            <h4 className='text-md'>Task description Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>

                        </div>

                        <div className="flex items-center">
                            <span className='m-2 hover:text-[#98ff5c]'><PencilOff /></span>
                            <span className='m-2 hover:text-[#ff5c5c]'><Trash /></span>
                        </div>
                    </div>

                </div>


                <div className="add flex justify-center items-center ">
                    <form className="flex-col justify-center items-center w-[50%] bg-[#f7ff65] rounded-md p-10" onSubmit={handel_signup} id="sign_form">
                        <label htmlFor="">Title :
                            <br />
                            < input className="h-10 w-[95%] bg-[#ffffff] p-3 mx-2 my-4 rounded-md" type="text"
                                id="name"
                                value={name}
                                onChange={(e) => { set_name(e.target.value) }}
                                required
                            />
                        </label>

                        <label htmlFor="">Description :
                            <br />
                            < input className="h-10 w-[95%] bg-[#ffffff] p-3 mx-2 my-4 rounded-md" type="email"
                                id="email"
                                value={email}
                                onChange={(e) => { set_email(e.target.value) }}
                                required

                            />
                        </label>

                        <div className=" w-[100%] flex justify-center items-center">
                            <button className="bg-[#ffffff] m-4 px-7 py-2 rounded-md text-[#000000] w-[50%] " type="submit">Add Task</button>
                        </div>
                    </form>

                </div>
            </main>
        </>

    )
}


export default Home;