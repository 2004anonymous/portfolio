import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, googleAuthProvider } from "../firebase/config";
import googleLogo from "../assets/google.png";


export const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            alert("User created succesfully !");
        }catch(error){
            console.log("Error:"+error);
            alert("Error: "+error);
        }
    }

    console.log(auth.currentUser?.email)

    const signInWighGoogle = async () => {
        try{
            await signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                console.log("Result "+JSON.stringify(result))
            })
        }catch(error){
            alert("Error: "+error);
        }
    }

    return(
        <>
        <div
        className="flex justify-center items-center w-full h-screen flex-col">
            <input type="text" placeholder="Email..." className="border border-gray-200 rounded-lg p-2 text-sm mb-3 w-64"
            onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password..." className="border border-gray-200 rounded-lg p-2 text-sm w-64"
            onChange={(e)=>setPassword(e.target.value)}/>
            <button className="bg-purple-500 rounded-lg mt-3 text-sm font-bold text-white w-64 p-2"
            onClick={signIn}>Sign Up</button>

            <div className="w-64 p-2 rounded-lg bg-slate-300 border border-slate-300 justify-start flex items-start mt-5 cursor-pointer"
            onClick={signInWighGoogle}>
                <img src={googleLogo} className="h-6 w-6" alt="" />
                <h1 className="text-black font-bold ms-2 text-sm">Continue with Google</h1>
            </div>

        </div>
        </>
    );
}