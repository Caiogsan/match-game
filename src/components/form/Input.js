function Input({type, name, placeholder, handleOnChange, value, styles}){
    return <input type={type} name={name} value={value} onChange={handleOnChange} className={styles} placeholder={placeholder}></input>
}

export default Input