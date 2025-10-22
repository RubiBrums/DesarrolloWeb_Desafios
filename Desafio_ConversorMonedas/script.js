async function mindicador(){
const res = await fetch("https://mindicador.cl/api/")
const data = await res.json()
console.log(data);
}
mindicador()