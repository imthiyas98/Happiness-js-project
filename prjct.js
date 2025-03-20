const material= document.getElementById("Materials")
const rate= document.getElementById("rate")
const item =document.getElementById("item")
const addButton=document.getElementById("submit-button")

const sandorder= document.getElementById("sandOrder")
const metalsorder= document.getElementById("MetalsOrder")
const othermaterialsorder=document.getElementById("OtherMaterialsOrder")
const Materials = [
    { material: "Sand", rate: 50, item: "1" },
    { material: "Metal", rate: 100, item: "2" },
    { material: "Cement", rate: 75, item: "3" }
];

addButton.addEventListener("click",onSubmit)
function onSubmit(e){
    e.preventDefault()
    const tr=document.createElement("tr")
        
       const text=`
                    <td>1</td>
                    <td>${material.value}</td>
                    <td>${rate.value}</td>
                 `
        tr.innerHTML=text
    if (item.value=="1"){
        
        sandorder.appendChild(tr)


    }
    else if(item.value=="2"){
        metalsorder.appendChild(tr)
    }
    else {
        othermaterialsorder.appendChild(tr)
    }
    material.value=''
    rate.value=''


}
