import {REPAIR_LIST, REPAIR_PHONE, MODEL_PHONE, GET_MODEL, GET_REPAIR, POST_REQUEST} from './types'

export const repairlist = () => dispatch =>{
    console.log("got")
    fetch("http://35.154.198.64/gprapi/repair/getRepairsList")
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type: REPAIR_LIST,
            payload: posts
        })
    
    )
  
}


export const repairphone = (iddata) => dispatch =>{
    // let iddata = localStorage.getItem('myData');
    // console.log("makeit",iddata)    
    fetch("http://35.154.198.64/gprapi/repair/getManufacturersFromRepair?repair_type="+iddata)
    .then(res => res.json())
    .then(repairpost => 
        dispatch({
            type: REPAIR_PHONE,
            payload: repairpost
        })
    
    )
  
}

export const modelsmanafacture = (iddata, manafactureid) => dispatch =>{
    // let iddata = localStorage.getItem('myData');
    // let manafactureid = localStorage.getItem('manafaturedataid');
    // console.log("manafactureid", manafactureid)
    // console.log("makeit",iddata)    
    fetch("http://35.154.198.64/gprapi/repair/getModelsFromManufacturers?repair_type="+iddata+"&manufacturer_id="+manafactureid)
    .then(res => res.json())
    .then(modelpost => 
        dispatch({
            type: MODEL_PHONE,
            payload: modelpost
        })
    
    )
  
}

export const getmodel = (iddata, manafactureid,iddevice) => dispatch =>{
    // let iddata = localStorage.getItem('myData');
    // let manafactureid = localStorage.getItem('manafaturedataid');
    // let modeldeviceid = localStorage.getItem('modeldeviceid')
    fetch("http://35.154.198.64/gprapi/repair/getRepairsFromModels?repair_type="+iddata+"&manufacturer_id="+manafactureid+"&model_id="+iddevice)
    .then(res => res.json())
    .then(getmodeldevice => 
        dispatch({
            type: GET_MODEL,
            payload: getmodeldevice
        })
    
    )
}

export const getrepairdetails = (iddata, manafactureid,iddevice, repairid) => dispatch =>{
    // let iddata = localStorage.getItem('myData');
    // let manafactureid = localStorage.getItem('manafaturedataid');
    // let modeldeviceid = localStorage.getItem('modeldeviceid')
    fetch("http://35.154.198.64/gprapi/repair/getRepairDetails?repair_type="+iddata+"&manufacturer_id="+manafactureid+"&model_id="+iddevice+"&repair_id="+repairid)
    .then(res => res.json())
    .then(getrepair => 
        dispatch({
            type: GET_REPAIR,
            payload: getrepair
        })
    
    )
}

export const create_posts = (postdata) => dispatch =>{
    console.log("gotpost", postdata)
    fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postdata)
      })
      .then(res=>res.json())
      .then((Response)=>{
          console.log("responesdid",Response)
      })
      .then(post => 
        dispatch({
            type: POST_REQUEST,
            payload: post
        })
    )
}
