const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'system_design'
    }
}

const knex = require('knex')(options);

var insert_token=(data)=>{
    return knex.select("*").from("users").insert(data)
};

var select = (emails,passwords)=>{
    return knex.select("*").from("users").
    where("users.email",emails).andWhere("users.password",passwords)

}

var student_task = (details)=>{
    return knex("student_submited_task").insert(details)
}

var selectFile = (tasks)=>{
    return knex.select("id").from("student_submited_task").where("email",tasks)
}

var grade = (std_grade)=>{
    return knex.select("*").from("student_grade").insert(std_grade)
}
var updateData=(data,ids)=>{
    return knex("student_submited_task").where({ id: ids }).update(data)
}

var select_submit_data = ()=>{
    return knex.select("name","email","task","grade").from("student_submited_task")
    .where("grade",0)
}
let selectTask=()=>{
    return knex.select("task").from("student_submited_task")
    .where("grade",0).limit(1)
}

const check_mail = (email)=>{
    return knex('users').count('*', {as: 'cnt'}).where("email",email)
}

 const updatGrade=((id, collection)=> {
    var data = Array.isArray(id);
    if(data === true){
       const updateAll = []
       for (var i = 0,max = collection.length; i<max; i+=1){
          const query = knex("student_submited_task").where('email',id[i]).update({"grade":collection[i]})
          updateAll.push(query)  
       } 
       return Promise.all(updateAll)
    }
    else{
       return knex("student_submited_task").where("email",id).update({"grade":collection})
    }
})


module.exports={check_mail,insert_token,selectTask,selectFile,select,student_task,grade,updateData,select_submit_data,updatGrade}