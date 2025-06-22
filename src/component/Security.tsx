
type SecurityFormType = {
    password:string,
    cpassword:string
}
type SecutiryFormProps = {
    password:string,
    cpassword:string,
    updateFields: (fields: Partial<SecurityFormType>) => void
}
export const Security = ({password, cpassword, updateFields}: SecutiryFormProps) => {
    return(
        <>
                <div className="flex justify-center items-stretch flex-col space-y-4">
                <div className=" mb-4">
        <h1 className="text-xl font-black text-center">Security</h1>
        <p className="text-sm text-gray-400 text-center px-16">Create an strong password to protect your account.</p>
        </div>
        <input type="password" placeholder="password" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={password}
        onChange={e => updateFields({password: e.target.value})}/>
        <input type="password" placeholder="confirm password" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={cpassword}
        onChange={e => updateFields({cpassword: e.target.value})}/>
        </div>
        </>
    )
}