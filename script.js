function showAlert(){
    var name1=document.getElementById("fname").value;
    var name2=document.getElementById("lname").value;
    var byr=document.getElementById("yr").value;
    var age=(2024-byr);

    if (name1&&name2&&byr){
        alert("Hello "+ name1+" "+name2+"! How does it feel to be "+age+" years old")
    }
    else{
        alert("Please enter again")
    }
}