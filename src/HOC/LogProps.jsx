export const logProp = (Component) =>{
    return (props)=>{
        console.log(props);
        return <Component {...props}/>
    }
}