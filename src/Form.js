import React from 'react'
import useForm from './useForm'
import validate from './validateLogin'
import './index.css'

const Form = () => {
    const {handleChange, handleSubmit, values, errors} = useForm(submit, validate);

    function submit(){
        alert('submitted ok!!')
    }



    return (
       <form onSubmit={handleSubmit}>
       <div>
           <label htmlFor="email">Email</label>
           <div>
             <input type="email" name='email' onChange={handleChange} value={values.email}/> 
            {errors.email && <p className='error'>{errors.email}</p>}
           </div>
       </div>
       <div>
           <label htmlFor="password">Password</label>
           <div>
             <input type="password" name='password' onChange={handleChange}  value={values.password}/> 
             {errors.password && <p className='error'>{errors.password}</p>}
           </div>
       </div>
       <button type='submit'>Submit</button>
       </form>
    )
}

export default Form
