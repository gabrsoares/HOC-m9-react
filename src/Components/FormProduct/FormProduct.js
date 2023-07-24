import React, { useState } from 'react'

function FormProduct({ setIsEmpty }) {
 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [product, setProduct] = useState('')

    const handleChange = (event) => {
        const {id, value} = event.target

        switch(id){
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'cpf':
                setCpf(value)
                break
            case 'product':
                setProduct(value)
                break
            default:
                console.log("Campo não encontrado!")
                break
        }
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setCpf('')
        setProduct('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length === 0 || email.length === 0 || cpf.length === 0 || product.length === 0){
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
            resetForm()
        }
    }

    return (
        <form>
            <div id='form'>
                <div className="name">
                    <label htmlFor="name">Nome:</label>
                    <input onChange={handleChange} value={name} type="text" id='name'/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} value={email} type="text" id='email'/>
                </div>
                <div className="cpf">
                    <label htmlFor="cpf">CPF:</label>
                    <input onChange={handleChange} value={cpf} type="text" id='cpf'/>
                </div>
                <label htmlFor="product">Produto:</label>
                <select id='product' value={product} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Computador">Computador</option>
                    <option value="Celular">Celular</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Notebook">Notebook</option>
                </select>
                <button onClick={handleSubmit}>Enviar</button>
            </div>
        </form>
    )
}

export default FormProduct;
