export function manageFriends(state={friends:[]}, action){
    if(action.type=== "ADD_FRIEND" && action.friend){
        return {friends:[...state.friends, action.friend] }
    }if(action.type=== "REMOVE_FRIEND" && action.id){
        return { friends: state.friends.filter(function( obj ) {
            return obj.id !== action.id;
          })} 
    }else{
        return state
    }
}
