//your JS code here. If required.
function Add_Row(){
	var table=document.getElementsByClassName("table-striped")[0].getElementsByTagName('tbody')[0];
	var newRow=table.insertRow();
	var cell1=newRow.insertCell(0);
	var cell2=newRow.insertCell(1);
	var cell3=newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	cell1.innerHTML = document.getElementById("title").value;
    cell2.innerHTML = document.getElementById("author").value;
    cell3.innerHTML = document.getElementById("isbn").value;
	var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Clear";
            deleteButton.className = "delete";
            deleteButton.onclick = function() {
            var row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    cell4.appendChild(deleteButton); 
	
}
