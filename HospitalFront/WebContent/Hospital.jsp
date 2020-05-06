
<%@page import="model.Hospital"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Details</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/Hospitals.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">
		
				<h1 class="m-3">Hospital details</h1>
				<form id="formHospital" name="formHospital" method="post" action="hospital.jsp">
					Hospital code: 
					<input id="hospitalCode" name="hospitalCode" type="text" class="form-control form-control-sm"> 
					<br> Hospital  name:
					<input id="hospitalName" name="hospitalName" type="text" class="form-control form-control-sm">
					<br> Hospital  Email: 
					<input id="hospitalEmail" name="hospitalEmail" type="text" class="form-control form-control-sm">
					
					 <br> Hospital  description: 
					 <input id="hospitalDesc" name="hospitalDesc" type="text" class="form-control form-control-sm"> 
					 <br> Hospital District:
					 <input id="hospitalDistrict" name="hospitalDistrict" type="text" class="form-control form-control-sm"> 
					 <br> Hospital Telephone:
					 <input id="hospitalTel" name="hospitalTel" type="text" class="form-control form-control-sm"> 
					 <br>
					<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary"> 
					<input type="hidden" id="hidHospitalIDSave" name="hidHospitalIDSave" value="">
				</form>
				<br>
					<div id="alertSuccess" class="alert alert-success"></div>
			
					<br>
					<div id="alertError" class="alert alert-danger"></div>
					


				
				
	
			<div id="divHospitalsGrid">
				<%
					Hospital hospitalObj = new Hospital();
					out.print(hospitalObj.readHospitals());
				%>
			</div>
		


			</div>
		</div>
		<br>
		
	</div>

</body>
</html>