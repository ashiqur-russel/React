import React, { useState } from 'react';


const ControlledForm = () => {

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]= useState('');
    const [email,setEmail]= useState('');
    const [saveData,setSaveData]= useState([]);

    const addForm =(e)=>{
        e.preventDefault();

        if(firstName && lastName && email){
            const data = {id:new Date().getTime().toString(),firstName,lastName,email};
            console.log(saveData);
            setSaveData((saveData)=>{
                return [...saveData,data];
            });
            setFirstName('');
            setLastName('');
            setEmail('');
        }else{
            console.log('Empty Values');
        }

    }
    return (
            <main>
                <section>
                    <form className='form'>
                        <div className='form-control'>
                            <label htmlFor='firstName'>First Name:</label>
                            <input 
                                type='text'
                                id='firstName' 
                                name='firstName' 
                                value={firstName} 
                                onChange={(e)=>setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='lastName'>Last Name:</label>
                            <input 
                                type='text'
                                id='lastName' 
                                name='lastName' 
                                value={lastName} 
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='btn' onClick={addForm}>ADD</button>
                    </form>
                </section>

                        {
                            saveData.map((data,index)=>{
                                const {id,firstName,lastName,email}=data;
                                return(
                                    <div className='item' key={id}>
                                        <h4>{firstName}</h4>
                                        <h4>{lastName}</h4>
                                        <p>{email}</p>
                                </div>
                                )
                            })
                        }
            </main>
    )
}

export default ControlledForm
