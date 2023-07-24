const main = document.getElementById("main");  
const mainRoot = ReactDOM.createRoot(main);
// import ScriptTag from 'react-script-tag';

mainRoot.render(
    <main>
        <div className="main_ihfo">
            <div className="right_info">
                <h1>ГО, МЫ СОЗДАЛИ!</h1>
                <h2>Старт регистрации команд</h2>
                <p>01.08-11.09</p>
            </div>
            
            <div className="left_info">


                <form action=""className="form1">
                    <button type="button"><a href="GetIdStudent.html">Найти по id</a></button>
                    <p></p>
                    <button type="button"><a href="GetFamiliyaStudent.html">Поиск студента</a></button>

                    <button type="submit" className="button"><a href="GetAllStudent.html">Показать всех участников</a></button>
         
                </form>
            </div>
        </div>
        <div className="aroww">
            <div className="elem_aroow"></div>
            <div className="elem_aroow"></div>
        </div>
    </main>
);