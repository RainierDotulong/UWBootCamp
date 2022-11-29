const delBtns = document.querySelectorAll(".del-btn")

delBtns.forEach(btn=>{
    btn.addEventListener("click",e=>{
        const delId = e.target.getAttribute("data-id");
        fetch(`/api/projects/${delId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
               location.reload()
            } else {
                alert("trumpet sound")
            }
        })
    })
})