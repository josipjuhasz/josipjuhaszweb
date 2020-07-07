x= new Array("../images/John-1.jpg","../images/John-2.jpg","../images/John-3.jpg","../images/John-4.jpg","../images/John background.jpg");
i=0;

function next(){
    i++;
    if(i==x.length){
        i=0;
    }
    document.getElementById("idGallery").src=x[i];
}

function back(){
    if(i==0){
        i=x.length;
    }
    i--;
    document.getElementById("idGallery").src=x[i];
}