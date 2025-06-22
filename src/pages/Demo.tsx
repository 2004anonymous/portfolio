import { FormEvent, ReactNode, useEffect, useState } from "react";
import { Address } from "../component/Address";
import { PersonalDetails } from "../component/PersonalDetails";
import { Security } from "../component/Security";
import { useStepper } from "../utils/useStepper";
import google from "../assets/google.png";
import { googleAuthProvider, auth } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import checkedLogo from '../assets/checked.svg';

export const Demo = () => {
  const progressStep = [
    {
      step: 1,
      tag: "Personal",
    },
    {
      step: 2,
      tag: "Address",
    },
    {
      step: 3,
      tag: "Security",
    },
  ];

  let progress = "0%";
  type FormDataType = {
    fullName: string;
    email: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    password: string;
    cpassword: string;
  };

  const INITIAL_FORM_DATA: FormDataType = {
    fullName: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    password: "",
    cpassword: "",
  };

  const continueWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const currentUser = result.user;
    } catch (error) {
      console.log("Error :" + error);
    }
  };

  function updateFields(fields: Partial<FormDataType>) {
    setFormData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
  }

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const { isCompleted, steps, currentstate, step, next, back } = useStepper([
    <PersonalDetails {...formData} updateFields={updateFields} />,
    <Address {...formData} updateFields={updateFields} />,
    <Security {...formData} updateFields={updateFields} />,
  ]);
  let isFirstStep: boolean = false;
  let isLastStep: boolean = false;
  if (currentstate === 0) {
    isFirstStep = true;
  }
  if (currentstate == steps.length - 1) {
    isLastStep = true;
  }

  switch (currentstate) {
    case 0:
      progress = "0%";
      break;
    case 1:
      progress = "50%";
      break;
    case 2:
      progress = "100%";
      break;
      case 3:
        progress = "100%";
        break;
    default:
      progress = "0%";
  }


  const storeData = () => {
    if (formData.password === formData.cpassword) {
    next();
    }else {
      alert("Password mismatch");
    }
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if(isLastStep){
      return storeData();
        }
    next();
  };

  const toast = 
  <div className="h-64 w-full flex justify-center items-center space-x-4">
    <img src={checkedLogo} className="h-20 w-20" alt="checkedLogo" />
  <h1 className="text-green-500 text-lg font-bold">Registration Succesfull !</h1>
  </div>
  

  return (
    <div className="flex justify-center min-h-screen items-center py-20 flex-col">
      <div className="w-full lg:w-2/6">
        <div className="h-1 w-96 lg:w-full mb-10 rounded-full bg-slate-200 relative m-auto">
          <div
            className={`h-full w-[${progress}] bg-purple-500 rounded-full transition-all ease-in-out duration-500`}
          ></div>
          <div className="w-full flex justify-between items-center absolute -top-3 lg:-top-4">
            {progressStep.map((step) => (
              <div
              key={step.step}
                className={` h-6 w-6 lg:h-9 lg:w-9 rounded-full ${
                  currentstate >= step.step - 1
                    ? "bg-purple-500"
                    : "bg-slate-200"
                } text-white flex justify-center items-center`}
              >
                {(currentstate+1 > step.step) ? (<span>&#10003;</span>) :  step.step}
              </div>
            ))}
          </div>
        </div>
        <form
          className=" min-h-96 items-center w-full relative px-10"
          onSubmit={submitForm}
        >
          {(isCompleted()) ? (toast) :  (step)}  
          {/* {step} */}
          {(!isCompleted()) ? (<div className=" flex justify-end items-center space-x-2 mt-5">
            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                className=" py-3 px-4 rounded-lg border border-purple-400 text-gray-500 hover:bg-purple-400 duration-200 hover:text-white text-sm font-bold flex-1"
              >
                <span className="me-2 font-bold">&larr;</span> back
              </button>
            )}
            <button
              type="submit"
              onSubmit={submitForm}
              className=" flex-1 py-3 px-4 rounded-lg bg-purple-400 text-white text-sm font-bold hover:bg-purple-500 duration-200"
            >
              {isLastStep ? "Finish" : "Continue"}
            </button>
          </div>) :  (<div className=" flex justify-end items-center space-x-2 mt-5">
            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                className=" py-3 px-4 rounded-lg border border-purple-400 text-gray-500 hover:bg-purple-400 duration-200 hover:text-white text-sm font-bold flex-1"
              >
                <span className="me-2 font-bold">&larr;</span> back
              </button>
            )}
            <button
              type="button"
              className=" flex-1 py-3 px-4 rounded-lg bg-purple-400 text-white text-sm font-bold hover:bg-purple-500 duration-200"
            >
              Go to Dashboard
            </button>
          </div>)}  

          
        </form>
        <div className="flex justify-center items-center flex-col space-y-5 mt-4">
          <span className="text-sm text-gray-500 cursor-pointer hover:text-purple-400" onClick={() => {alert("Not yet implemented")}}>
            Need help?
          </span>
          <div
            className="py-3 flex justify-start items-center bg-slate-100 cursor-pointer border px-5 rounded-lg w-96 space-x-2"
            onClick={continueWithGoogle}
          >
            <img src={google} className="h-6 w-6" alt="" />
            <h1 className="text-sm text-gray-600 font-medium">
              Continue with google
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
