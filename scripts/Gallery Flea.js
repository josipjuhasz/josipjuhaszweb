x= new Array("../images/Flea-1.jpg","../images/Flea-2.jpg","../images/Flea-3.jpg","../images/Flea-4.jpg","../images/Flea background.jpg");
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