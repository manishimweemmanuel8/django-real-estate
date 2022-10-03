import {PROPERTY_LIST_REQUEST,PROPERTY_LIST_SUCCESS,PROPERTY_LIST_FAIL} from "../actions/types";


export const propertiesListReducer=(state={properties:[]}, action)=>
{
    switch(action.type){
        case PROPERTY_LIST_REQUEST:
            return {laoding:true, properties:[]};
        case PROPERTY_LIST_SUCCESS:
            return {laoding:false, properties:action.payload.results};
        case PROPERTY_LIST_FAIL:
            return {laoding:false, error:action.payload};
        default:
            return state;
    }
}