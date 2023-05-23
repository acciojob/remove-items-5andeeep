//your JS code here. If required.

function deleteElement(){
    let selectElement = document.getElementById("colorSelect");
    let selectedColor = selectElement.value;
    let children = selectElement.children;

    for(let i=0; i<children.length; i++){
        if(selectedColor === children[i].value){
            children[i].remove();
        }
    }
}
