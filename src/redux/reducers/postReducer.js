import {REPAIR_LIST, REPAIR_PHONE, MODEL_PHONE, GET_MODEL,GET_REPAIR, POST_REQUEST} from '../actions/types'

const initialState = {
    items :[],
    RepairItems: [],
    modalItems: [],
    getmodelitems: [],
    infosignup : {},
    getrepairdetails: [],
}

export default function (state = initialState, action){
  console.log("called")
    switch (action.type) {
       
        case REPAIR_LIST :
        console.log("got")
          return{
            ...state,
            items: action.payload
          }
          break;
          case REPAIR_PHONE :
          console.log("gotdbasd")
            return{
              ...state,
              RepairItems: action.payload
            }
            break;
            case MODEL_PHONE :
            console.log("gotdbasdmodal")
              return{
                ...state,
                modalItems: action.payload
              }
              break;
              case GET_MODEL :
              console.log("gotdbasdmodalitems")
                return{
                  ...state,
                  getmodelitems: action.payload
                }
                break;
                case GET_REPAIR :
                console.log("getrepairdetaislconsole")
                  return{
                    ...state,
                    getrepairdetails: action.payload
                  }
                break;
                case POST_REQUEST :
                console.log("getpostrequest")
                  return{
                    ...state,
                    infosignup: action.payload
                  }
                
            default : return state;
            break;
    }
    // switch (action.type) {
       
    //     case SIGNUP_INFO :
    //     console.log("gotinfo")
    //       return{
    //         ...state,
    //         infosignup: action.payload
    //       }
    //       default : 
    //       return state;
    // }
}