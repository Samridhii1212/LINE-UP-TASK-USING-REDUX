export const addtodo=(data)=>
{
    const id=new Date().getTime();
 return{
    type:"add",
    payload:
    {
        id:{id},
        data:data
    }
 }
}
export const deletetodo = (id) => {
    return {
        type: "delete",
        id: {id},
    }
}

export const removeall=()=>{
    return{
        type: "removeall",
    }
}