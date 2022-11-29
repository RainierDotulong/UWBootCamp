fetch("/pets").then(res=>res.json()).then(data=>{
    console.log(data);
    data.forEach(pet=>{
        const newLi = document.createElement("li");
        newLi.textContent = pet.name;
        document.querySelector("#pets").append(newLi)
    })
})