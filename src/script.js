let product=[];
let f=0;

function submitForm(){
var val1=document.getElementById("p1").value;
var val2=document.getElementById("p2").value;
var val3=document.getElementById("p3").value;
var result="";
if(checkData(val1,val2,val3)){
result=store(val1,val2,val3);
display(result);
}
else
document.getElementById("result").innerHTML='<p>Invalid input</p>';
}

function checkData(val1,val2,val3){
if(val1==""&&val2==""&&val3=="")
return false;
else
return true;
}

function store(val1,val2,val3){
parse_val1=parseInt(val1);
parse_val3=parseInt(val3);
for(let i=0;i<product.length;i++)
{
if(product[i].id==parse_val1)
{
return product;
}
}
const myJSON={"id":parse_val1,"name":val2,"price":parse_val3 };
product.push(myJSON);
return product;
}

function display(result)
{
    for(let i=f;i<result.length;i++,f++)
document.getElementById("tb2").innerHTML+='<tr><td>'+result[i].id+'</td><td>'+result[i].name+'</td><td>'+result[i].price+'</td></tr>';
}
