import {useState, useEffect} from 'react'


const useForm = (callback, validate) => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange =(e)=> {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
    }

    useEffect(() => {
        //check if there are no errors
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    }, [errors])

    return {
      handleChange,
      handleSubmit,
      values,
      errors
    }
}

export default useForm
