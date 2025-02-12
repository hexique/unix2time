let history = [];

function update(){
    let date = new Date();
    document.getElementById("title").innerHTML = `Time in Unix ( now ${Date.now()} / ${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')} )<br>`
    
}
update()

function convert(){
    date = new Date(Number(document.getElementById("unix").value));
    document.getElementById("result").innerHTML = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getHours()).padStart(2,'0')}`;
    document.getElementById("history").innerHTML += `${document.getElementById("unix").value} = ${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getHours()).padStart(2,'0')}<br>`
}