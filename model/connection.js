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
// Returns [ { id: 42, title: "The Hitchhiker's Guide to the Galaxy" } ]
// knex('books')
//   .where({ id: 42 })
//   .update({ title: "The Hitchhiker's Guide to the Galaxy" }, ['id', 'title'])

var updateData=(data,ids)=>{
    return knex("student_submited_task").where({ id: ids }).update(data)
    // .into("student_submited_task")
}

var select_submit_data = ()=>{
    return knex.select("*").from("confirm_details")
    .where("grade",0)
}



const updatGrade=((id, collection)=> {
     var data = Array.isArray(id);
     if(data === true){
        const updateAll = []
        for (var i = 0,max = collection.length; i<max; i+=1){
           const query = knex("confirm_details").where('email',id[i]).update({"grade":collection[i]})
           updateAll.push(query)  
        } 
        return Promise.all(updateAll)
     }
     else{
        return knex("confirm_details").where("email",id).update({"grade":collection})
     }
 })



module.exports={insert_token,selectFile,select,student_task,grade,updateData,select_submit_data,updatGrade}