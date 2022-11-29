document.querySelector("#new-proj").addEventListener("submit",e=>{
    e.preventDefault();
    const projObj = {
        name:document.querySelector("#name").value,
        description:document.querySelector("#description").value,
        needed_funding:document.querySelector("#funding").value
    }
    console.log(projObj)
    fetch("/api/projects",{
        method:"POST",
        body:JSON.stringify(projObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

