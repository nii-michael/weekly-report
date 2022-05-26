var selectedRow = null

function onFormSubmit(e) {
	if(document.getElementById("fullName").value.length>0&&document.getElementById("retailerNo").value.length>0&&document.getElementById("amount").value.length>0&&document.getElementById("contribution").value.length>0){
        event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
    }
    else{
        event.preventDefault();
        alert("Please fill in all details");
    }
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["retailerNo"] = document.getElementById("retailerNo").value;
    formData["amount"] = document.getElementById("amount").value;
    formData["contribution"] = document.getElementById("contribution").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("topTierList").getElementsByTagName('tbody')[0];
    
   if(table.rows.length<10){
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.retailerNo;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.amount;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.contribution;
        
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
    
   }
   else{
       alert("Maximum table data entered");
   }
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("retailerNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contribution").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.retailerNo;
    selectedRow.cells[2].innerHTML = formData.amount;
    selectedRow.cells[3].innerHTML = formData.contribution;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('topTierList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("fullName").value = '';
    document.getElementById("retailerNo").value = '';
    document.getElementById("amount").value = '';
    document.getElementById("contribution").value = '';
    selectedRow = null;
}
