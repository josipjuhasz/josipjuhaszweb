x= new Array("../images/Anthony-1.jpg","../images/Anthony-2.jpg","../images/Anthony-3.jpg","../images/Anthony-4.jpg","../images/Anthony background.jpg");
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