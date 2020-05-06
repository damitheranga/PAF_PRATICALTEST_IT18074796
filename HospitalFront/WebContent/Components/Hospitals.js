$(document).ready(function()
{
    $("#alertSuccess").hide();
    $("#alertError").hide();
    
});
// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	// Form validation-------------------
	var status = validateHospitalForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
// If valid------------------------
	
	var type = ($("#hidHospitalIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "HospitalsAPI",
		type : type,
		data : $("#formHospital").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onHospitalSaveComplete(response.responseText, status);
		}
	});

});

function onHospitalSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divHospitalsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidHospitalIDSave").val("");
	$("#formHospital")[0].reset();
}

// UPDATE==========================================
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#hidHospitalIDSave").val(
					$(this).closest("tr").find('#hidHospitalIDUpdate').val());
			$("#hospitalCode").val($(this).closest("tr").find('td:eq(0)').text());
			$("#hospitalName").val($(this).closest("tr").find('td:eq(1)').text());
			$("#hospitalEmail").val($(this).closest("tr").find('td:eq(2)').text());
			$("#hospitalDesc").val($(this).closest("tr").find('td:eq(3)').text());
			$("#hospitalDistrict").val($(this).closest("tr").find('td:eq(4)').text());
			$("#hospitalTel").val($(this).closest("tr").find('td:eq(5)').text());
			
		});


//remove
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "HospitalsAPI",
		type : "DELETE",
		data : "hospitalID=" + $(this).data("hospitalid"),
		dataType : "text",
		complete : function(response, status) {
			onHospitalDeleteComplete(response.responseText, status);
		}
	});
});


function onHospitalDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divHospitalsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}




// CLIENTMODEL=========================================================================
function validateHospitalForm() {
	// CODE
	if ($("#hospitalCode").val().trim() == "") {
		return "Insert Hospital Code.";
	}
	// NAME
	if ($("#hospitalName").val().trim() == "") {
		return "Insert Hospital Name.";
	}
	// NAME
	/*if ($("#hospitalEmail").val().trim() == "") {
		return "Insert Hospital Email.";
	}*/
	
	//Email Validation
	
	var email = $('#hospitalEmail').val();
	
	 if(email== ''){
         $('#email').next().show();
     	return "Insert Hospital Email.";
      }
      if(IsEmail(email)==false){
          $('#invalid_email').show();
          return "Insert valid Email Address.";
      }

	
	// Description
	if ($("#hospitalDesc").val().trim() == "") {
		return "Insert Hospital Description.";
	}
	// District
	if ($("#hospitalDistrict").val().trim() == "") {
		return "Insert Hospital District.";
	}
	

	
	
	// is numerical value
	var tel = $("#hospitalTel").val().trim();
	if (!$.isNumeric(tel)) {
		return "Insert a numerical value for Telephone Number.";
	}
	


	return true;
	
}


function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
       return false;
    }else{
       return true;
    }
  }
