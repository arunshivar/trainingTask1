/**
 * Created by Arun on 1/3/2017.
 */
jQuery( document ).ready(function() {
    console.log( "document loaded" );
    var empdetails = new EmployeeDetails();
    empdetails.getEmployees();
});

var EmployeeDetails = function ()
{
    var employeesArray = new Array();
    function getEmployees()
    {
        jQuery.ajax(
            {
                type : 'GET',
                url : 'employees.json',
                data :  'jsonArray',
                dataType: 'json',
                success: function (data){
                    setToTable(data);
                },
                complete: function () {
                    console.log("Completed")
                }
            });
    }
    function setToTable(jsonArray)
    {
        var tbody = jQuery('#tableBody');
        for (var i = 0; i < jsonArray.length; i++)
        {
            var tr = jQuery('<tr/>').appendTo(tbody);
            tr.attr('rowId', jsonArray[i].empId);
            tr.on('click', function ()
            {
                displayDetails(jQuery(this).attr('rowId'));
            });
            tr.append('<td>' + jsonArray[i].empId + '</td>');
            tr.append('<td>' + jsonArray[i].empName  + '</td>');

            var emp = new Employee();
            emp.setName(jsonArray[i].empName);
            emp.setId(jsonArray[i].empId);
            emp.setDob(jsonArray[i].DOB);
            emp.setExperience(jsonArray[i].Experience);
            emp.setPhone(jsonArray[i].Phone);
            emp.setCity(jsonArray[i].City);
            emp.setEmpDesignation(jsonArray[i].Designation);
            employeesArray.push(emp);
        }
    }

    function displayDetails(id)
    {
        var details = jQuery('#details');
        details.html("");
        for(var i=0;i<employeesArray.length;i++)
        {
            if (employeesArray[i].getId() == id)
            {
                jQuery("<p/>").html("<b> Name : </b>"+employeesArray[i].getName()).appendTo("#details");
                jQuery("<p/>").html("<b> Experience : </b> "+employeesArray[i].getExperience()).appendTo("#details");
                jQuery("<p/>").html("<b> Designation : </b>"+employeesArray[i].getEmpDesignation()).appendTo("#details");
                jQuery("<p/>").html("<b> Phone : </b>"+employeesArray[i].getPhone()).appendTo("#details");
                jQuery("<p/>").html("<b> DOB : </b>"+employeesArray[i].getDob()).appendTo("#details");
                jQuery("<p/>").html("<b> City : </b>"+employeesArray[i].getCity()).appendTo("#details");
            }
        }
    }
    return{
        "getEmployees" : getEmployees
    }
}