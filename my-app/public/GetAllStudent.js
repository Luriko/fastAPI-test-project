let url = "http://127.0.0.1:8000/get_all_students"
async function getUsers() {
            // отправляет запрос и получаем ответ
            const response = await fetch(url, {
                method: "GET",
                headers: { "Accept": "application/json" }
            })
            // если запрос прошел нормально
            if (response.ok === true) {
                // получаем данные
                const users = await response.json();
                const rows = document.querySelector("tbody");
                users.forEach(user => rows.append(row(user)));
            }
        }
function row(user) {
  
            const tr = document.createElement("tr");
            tr.setAttribute("data-rowid", user.id);
  
            const familiaTD = document.createElement("td");
            familiaTD.append(user.familiya);
            tr.append(familiaTD);

            const imiaTD = document.createElement("td");
            imiaTD.append(user.imya);
            tr.append(imiaTD);

            const otchestvoTD = document.createElement("td");
            otchestvoTD.append(user.otchestvo);
            tr.append(otchestvoTD);

            const birthdateTD = document.createElement("td");
            birthdateTD.append(user.birthdate);
            tr.append(birthdateTD);
  
            const linksTd = document.createElement("td");

            tr.appendChild(linksTd);
  
            return tr;
        }
        getUsers(); 
    