async function getUser() {
    let url = 'http://127.0.0.1:8000/get_by_student_id';
            const response = await fetch(url, {
                method: "GET",
                headers: { "Accept": "application/json" }
            });
            if (response.ok === true) {
                const users = await response.json();
                const rows = document.querySelector("tbody");
                users.forEach(user => rows.append(row(user)));
            }
            else {
                // если произошла ошибка, получаем сообщение об ошибке
                const error = await response.json();
                console.log(error.message); // и выводим его на консоль
            }
        }

