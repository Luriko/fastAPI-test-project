// const http = require("http");
// const fs = require("fs");
   
// http.createServer(function(request, response){
       
//     let filePath = "index.html";
//     if(request.url !== "/"){
//         // получаем путь после слеша
//         filePath = request.url.substring(1);
//     }
//     fs.readFile(filePath, function(error, data){
               
//         if(error){
                   
//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }   
//         else{
//             response.end(data);
//         }
//     });

// }).listen(3000, function(){
//     console.log("Server started at 3000");
// });
import React from 'react';
import { useState } from 'react';
export {useState}
import Axios from 'axios';
// import { useState } from 'react';
// import React from 'react';

export const search_by_id = (token, id) => {
    $.ajax({
        type: "POST",
        url: "get_by_student_id/",
        data: { csrfmiddlewaretoken: token, id:id },
        success: function(data){
            document.getElementsByTagName("h1").innerHTML = JSON.stringify(JSON.parse(data), null, 4);
        }
    });
}



const navigate_get_by_id = () =>{
    window.location.href = "ListOfStudents.html";
};

// const id2 = get_by_id;
// const componentDidMount = () =>{
//     Axios.get("'/get_by_student_id'").then((response)=>{
//         console.log(response)
//     }) 
// }

// // fetch('http://127.0.0.1:8000/get_by_student_id',{
// //     method: 'POST',
// //     headers:{"Content-Type": "application/json"},
// //     body: 
// // })


// function app(){  
//     const url = "http://127.0.0.1:8000/get_by_student_id"
//     const [data,setData] = useState({
//         id: ""
//     })
//     function handle(e){
//         const newid={...data}
//         newid[e.target.id] = e.target.value     
//         setData(newid)
//         console.log(newid)
//     }
//     function submit(e){
//         e.preventDefault();
//         Axios.post(url,{
//             id: data.id
//         })
//         .then(result=>{
//             console.log(result.data)
//         })
//     }
// }
export function componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'accept': 'application/json' },
        body: JSON.stringify({ "id": 2 })
    };
    fetch('/get_by_student_id', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}
function componentDid() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'GET',
        url: '/get_all_students',
        headers: { 'Content-Type': 'application/json','accept': 'application/json' },
    };
    fetch(url, {mode:'no-cors'})
        .then(response => response.json())
        .then(data => this.setState({ getId: data.id }));
}
