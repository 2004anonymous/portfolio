

type AddressFormType = {
    street: string,
    city: string,
    state: string
    country: string
}

type AddressFormProps = {
    street:string,
    city: string,
    state: string,
    country: string,
    updateFields: (fields: Partial<AddressFormType> ) => void
}
export const Address = ({street, city, state, country, updateFields}: AddressFormProps) =>{
    return(
        <div className="flex justify-center items-stretch flex-col space-y-4">
                        <div className=" mb-4">
        <h1 className="text-xl font-black text-center">Address</h1>
        <p className="text-sm text-gray-400 text-center px-10">Add your permanent or temporary destination here.</p>
        </div>
    <input type="text" placeholder="street" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={street}
    onChange={e => updateFields({street: e.target.value})}/>
    <input type="text" placeholder="city" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={city}
    onChange={e => updateFields({city: e.target.value})}/>
    <input type="text" placeholder="state" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={state}
    onChange={e => updateFields({state: e.target.value})}/>
    <input type="text" placeholder="country" required className=" rounded-lg border focus:outline-none focus:border-slate-400 text-sm py-2 px-5" value={country}
    onChange={e => updateFields({country: e.target.value})}/>
    </div>
    );
}