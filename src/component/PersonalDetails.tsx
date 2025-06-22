import { ReactNode } from "react";

type PersonalFormType = {
    fullName: string,
    email: string,
    phoneNumber: string
}

type PersonalFormProps = {
    fullName:string,
    email: string,
    phoneNumber: string,
    updateFields: (fields: Partial<PersonalFormType> ) => void
}
export const PersonalDetails = ({fullName, email, phoneNumber, updateFields}: PersonalFormProps) =>{
    return(
        
        <div className="flex justify-center items-stretch flex-col space-y-4">
        <div className=" mb-4">
        <h1 className="text-xl font-black text-center">Personal Details</h1>
        <p className="text-sm text-gray-400 text-center">Please fill your personal details here.</p>
        </div>
        <input type="text" placeholder="Enter your full name" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={fullName}
        onChange={(e) => updateFields({fullName: e.target.value})}/>
        <input type="number" placeholder="Enter phone number" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={email}
        onChange={(e) => updateFields({email: e.target.value})}/>
        <input type="email" placeholder="your email" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={phoneNumber}
        onChange={(e) => updateFields({phoneNumber: e.target.value})}/>
        </div>
    );
}