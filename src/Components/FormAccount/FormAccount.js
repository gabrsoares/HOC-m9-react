import React, { useState } from 'react'
import './FormAccount.css'

function FormAccount({setIsAccEmpty, setIsEqual}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rpassword, setRpassword] = useState('')

    const handleChange = (event) => {
        const {id, value} = event.target

        switch(id){
            case 'account-name':
                setName(value)
                break
            case 'account-email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            case 'rpassword':
                setRpassword(value)
                break
            default:
                console.log("Campo não encontrado!")
                break
        }
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setPassword('')
        setRpassword('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length === 0 || email.length === 0 || password.length === 0 || rpassword.length === 0){
            setIsAccEmpty(true)
        } else {
            setIsAccEmpty(false)
            if(password !== rpassword){
                setIsEqual(false)
            } else {
                setIsEqual(true)
                resetForm()
            }
        }
    }

    return (
        <form>
            <div className='form account'>
                <div className="field name">
                    <label htmlFor="account-name">Nome:</label>
                    <input onChange={handleChange} value={name} type="text" id='account-name'/>
                </div>
                <div className="field email">
                    <label htmlFor="account-email">Email:</label>
                    <input onChange={handleChange} value={email} type="text" id='account-email'/>
                </div>
                <div className="field password">
                    <label htmlFor="password">Senha:</label>
                    <input onChange={handleChange} value={password} type="password" id='password'/>
                </div>
                <div className="field rpassword">
                    <label htmlFor="rpassword">Confirmar senha:</label>
                    <input onChange={handleChange} value={rpassword} type="password" id='rpassword'/>
                </div>
                <button onClick={handleSubmit}>Enviar</button>
            </div>
        </form>
    )
}

export default FormAccount;
