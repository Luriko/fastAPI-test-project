

const main = document.getElementById("main");  
const mainRoot = ReactDOM.createRoot(main);
let url2 = "http://127.0.0.1:8000/create_student";

    //сохраняем данные из полей ввода
let f
let i
let o
let b

function componentDid() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'accept': 'application/json' ,
                    'Access-Control-Allow-Origin': "*",
                    'Access-Control-Allow-Headers': "*",
                    'Access-Control-Allow-Methods': "POST"
                },
        body: JSON.stringify({ 
            familiya : f,
            imya: i,
            otchestvo: o,
            birthdate: b
        })
    };
    fetch(url2, requestOptions)
        .then(response => response.json())
        // .then(data => this.setState({ postId: data.id }));

        window.location.reload();


}
    //Проверяем если данные обновляются
function handleChange(event) {
    if (event.target["id"] == "userFamiliya") {
        f = (event.target.value)
    }
    else if(event.target["id"] == "userImya"){
        i = (event.target.value)
    }
    else if(event.target["id"] == "userOtchestvo"){
        o = (event.target.value)
    }
    else if(event.target["id"] == "userBirthDate"){
        b = (event.target.value)
    }
    console.log(f,i,o,b)
}

mainRoot.render(
    <main>
        
       <h2>Добавить студента</h2>
    <div>
        <input type="hidden" id="userId" />
        <form>
            <p>
                Фамилия:<br/>
                <input id="userFamiliya" onChange={handleChange}/>
            </p>
            <p>
                Имя:<br/>
                <input id="userImya" onChange={handleChange}/>
            </p>
            <p>
                Отчество:<br/>
                <input id="userOtchestvo" onChange={handleChange}/>
            </p>
            <p>
                Дата рождения:<br/>
                <input id="userBirthDate" type="date" onChange={handleChange}/>
            </p>
            <p>
                <button type="button" onClick={() => componentDid(userFamiliya,userImya,userOtchestvo,userBirthDate)}>Сохранить</button>
            </p>
        </form>
    </div>
    <br></br>
    <button type="button"><a href="index.html">Вернутся на главную страницу</a></button>
    </main>
)