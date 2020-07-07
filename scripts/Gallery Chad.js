x= new Array("../images/Chad-1.jpg","../images/Chad-2.jpg","../images/Chad-3.jpg","../images/Chad-4.jpg","../images/Chad background.jpg");
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