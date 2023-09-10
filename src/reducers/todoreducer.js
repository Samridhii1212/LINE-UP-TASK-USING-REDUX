const initial={
    todolist:[]
}

 const todoreducers=(state=initial,action)=>
{
 if(action.type==="add")
 {
    return {
        ...state,
        todolist:[...state.todolist,
            {
                id:action.payload.id,
                data:action.payload.data

            }]

    }
 }
   else if(action.type === "delete") {
     
    // console.log(state.todolist)

     const newlist=state.todolist.filter((item) => action.id.id!=item.id) 

     return {
         ...state,
         todolist: newlist,
     };
    }

else if(action.type==="removeall")
{
    return{
        ...state,
        todolist:[]
    }
}
 else return state
}
export default todoreducers;