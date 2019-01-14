const spiderHam = document.getElementById("spiderHam");
const spiderHamInfo = document.getElementById("spiderHam-description");
const peniParker = document.getElementById("peniParker");
const peniParkerInfo = document.getElementById("peniParker-description");
const spiderGwen = document.getElementById("spiderGwen");
const spiderGwenInfo = document.getElementById("spiderGwen-description");
const miles = document.getElementById("milesMorales");
const milesMoralesInfo = document.getElementById("milesMorales-description");
const spiderman = document.getElementById("spiderMan");
const spiderManInfo = document.getElementById("spiderMan-description");
const spiderNoir = document.getElementById("Noir");
const spiderNoirInfo = document.getElementById("Noir-description");

spiderHam.addEventListener("click", () => {
    spiderHamInfo.innerHTML = "test";
    spiderHamInfo.style.boxShadow = "10px 10px 5px grey";
    console.log("success");
})

peniParker.addEventListener("click", () => {
    peniParkerInfo.innerHTML = "test";
})

spiderGwen.addEventListener("click", () => {
    spiderGwenInfo.innerHTML = "test";
})

miles.addEventListener("click", () => {
    milesMoralesInfo.innerHTML = "test";
})

spiderman.addEventListener("click", () => {
    spiderManInfo.innerHTML = "test";
})

spiderNoir.addEventListener("click", () => {
    spiderNoirInfo.innerHTML = "test";
})