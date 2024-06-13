
//Multi-Threading

;(async ()=>{
    let l = await (await fetch("https://irmapserver.ir/ex/users.json")).json()

    l.sort((a,b)=>{
        return a.score - b.score
    });

    l = l.filter(a => a.score >= 19);

    let obj = {
        student:{
            name:"نام و نام خانوادگی",
            id:"1000",
            obj:l
        }
    }
    
    let res = await(await fetch("https://xtal.ir/api/js/ex",{
        method:"POST",
        body:JSON.stringify(obj)
    })).json()
    console.log(res)
})()


