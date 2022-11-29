document.querySelector("#logout").addEventListener("click",e=>{
    fetch("/api/users/logout",{
        method:"POST",
    }).then(res=>{
        if(res.ok){
           location.href="/"
        } else {
            alert("trumpet sound")
        }
    })
})