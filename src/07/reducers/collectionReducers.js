import {SET_COLLECTION,SET_AGE} from '../actions/collectionActions';


const initState = {
    ids :[],
    entities:{},
}

export default (state=initState,action)=>{
    const {type,payload} = action;

    switch(type){
        case SET_COLLECTION :{
            //payload의 하위에 ids와 entities를 저장
            const ids = payload.map(entity=>entity['id']);
            const entities = payload.reduce((finalEntities,entity)=>({
                ...finalEntities,
                [entity['id']]:entity
            }),{});
            return {...state,ids,entities};
        }
        case SET_AGE :{
            const {id,age} = payload;
            return {
                ...state,//기존 state를 그대로 가져오고
                entities:{//위에서 entities를 선언했기 때문에 그대로 사용
                    ...state.entities, //각 entities도 그대로 가져오지만
                    [id] : {...state.entities[id],age}, //id 에 해당하는 객체는 age를 제외 나머지를 그대로 가지고 오되, age는 바꿈
                }
            }
        }
        default :
        return state;
    }
}