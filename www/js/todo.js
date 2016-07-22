function getArray() 
{   
	//create an array
	var toDoList = new Array ;
	//get the task from input using localStorage
	var taskStr = localStorage.getItem(toDoList);
	//if the value is Not empty --null--
    if (tashStr !== null )
    	{
    	taskStr = JSon.parse(taskStr);
    	}
	    //parse the date into the array
	return toDoList ;
	}

function addTask() 
{
    var task= document.getElementById(taskname).value; //create a variable to hold value of input
    var array = getarray();                           //create a variable to hold our array
	array.push(task);                                   //pushing the task into the Array
	localStorage.setItem(array, JSon.stringify(task)); //Store the Task localStorage saving to the Array
	show();
	return false ;

}
function show()
{
	var array = getArray();               //create the variable to hold array
	var htmlFormat = "<ul>";             //Add unordered List
	for (var i =0 ;i < array.length;i++)  //A For Loop to display the Array 
	{
		htmlFormat += "<li>"+array[i]+"</li>";
	}
	var htmlFormat = "</ul>";
	document.getElementById(array).innerHTML=htmlFormat;   //show the document 
	
}
documet.getElementById("add").addEventListener("click", addTask);