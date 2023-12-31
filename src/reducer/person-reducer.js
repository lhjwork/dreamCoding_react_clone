export default function personReducer(person, action){
    
    switch(action.type)
    {
        case 'update':{
            const {prev, current} = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor)=>{
                    if(mentor.name === prev){
                      return {...mentor, name:current};
                    }else{
                      return mentor;
                    }
                  })
                  
            }
        }
        case 'added':{
            const {name, title} = action;
            return {
                ...person, mentors:[...person.mentors, {name, title}]
            }

        }
        case 'deleted' :{
            const name = action.name;
            return {
                ...person, mentors:person.mentors.filter(m => m.name !== name),
            }
           
        }
        
        default : {
            throw Error(`알수없는 액션 타입입니다.: ${action.type}`);
        }
    }
}