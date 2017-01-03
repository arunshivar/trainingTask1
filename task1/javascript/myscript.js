/**
 * Created by Arun on 1/3/2017.
 */

$( document ).ready(function() {
    console.log( "document loaded" );
    /*getEmployees();*/

    var empdetails = new EmployeeDetails();
    empdetails.getEmployees();

});

var EmployeeDetails = function ()
{
    var employeesArray = new Array();


    function getEmployees()
    {
        loadJson(function(response) {
            // Parse JSON string into object
            var jsonArray = JSON.parse(response);
            console.log(jsonArray);

            var empdiv = document.getElementById("employeediv");
            var table = document.createElement('table');
            table.border = 1;
            table.id = "employeeTable";
            var tableHeader = document.createElement('th');
            var tr = document.createElement('tr');
            var th1 = document.createElement('th');
            var th2 = document.createElement('th');
            var id = document.createTextNode("Id");
            var name = document.createTextNode("Name");
            th1.appendChild(id);
            th2.appendChild(name);
            tr.appendChild(th1);
            tr.appendChild(th2);
            table.appendChild(tr);

            for (var i = 0; i < jsonArray.length; i++)
            {

                tr = document.createElement('tr');
                tr.setAttribute("rowId",jsonArray[i].empId);
                /*tr.onlick = displayDetails(tr.getAttribute("rowId"));*/
                tr.onclick = (function ()
                {
                    displayDetails(this.getAttribute("rowId"));
                });
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.appendChild(document.createTextNode(jsonArray[i].empId));
                td2.appendChild(document.createTextNode(jsonArray[i].empName));
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

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
            empdiv.appendChild(table);
            console.log(" * "+ employeesArray);

        });
    }

    function loadJson(callback)
    {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'employes.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    function displayDetails(id)
    {
        var details = document.getElementById("details");
        details.innerHTML = "";
        var name = document.createElement("p");
        var phone = document.createElement("p");
        var experience = document.createElement("p");
        var dob = document.createElement("p");
        var city = document.createElement("p");
        var designatoin = document.createElement("p");
        for(var i=0;i<employeesArray.length;i++)
        {
            var emp = employeesArray[i];
            if(employeesArray[i].getId() == id)
            {
                name.innerHTML = "<b> Name : </b>" + employeesArray[i].getName();
                experience.innerHTML = "<b> Experience : </b>"+employeesArray[i].getExperience();
                phone.innerHTML = "<b> Phone : </b>"+employeesArray[i].getPhone();
                dob.innerHTML = "<b> DOB : </b>"+employeesArray[i].getDob();
                city.innerHTML = "<b> City : </b>"+employeesArray[i].getCity();
                designatoin.innerHTML = "<b> Designation : </b>"+employeesArray[i].getEmpDesignation();

                details.appendChild(name);
                details.appendChild(designatoin);
                details.appendChild(experience);
                details.appendChild(phone);
                details.appendChild(dob);
                details.appendChild(city);
            }
        }

    }

    return{
        "getEmployees" : getEmployees,
        "loadJson" : loadJson,
        "displayDetails" : displayDetails
    }




}

/*var employeesArray = new Array();



function getEmployees()
{
    loadJson(function(response) {
        // Parse JSON string into object
        var jsonArray = JSON.parse(response);
        console.log(jsonArray);

        var empdiv = document.getElementById("employeediv");
        var table = document.createElement('table');
        table.border = 1;
        table.id = "employeeTable";
        var tableHeader = document.createElement('th');
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var id = document.createTextNode("Id");
        var name = document.createTextNode("Name");
        th1.appendChild(id);
        th2.appendChild(name);
        tr.appendChild(th1);
        tr.appendChild(th2);
        table.appendChild(tr);

        for (var i = 0; i < jsonArray.length; i++)
        {

            tr = document.createElement('tr');
            tr.setAttribute("rowId",jsonArray[i].empId);
            /!*tr.onlick = displayDetails(tr.getAttribute("rowId"));*!/
            tr.onclick = (function ()
            {
               displayDetails(this.getAttribute("rowId"));
            });
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.appendChild(document.createTextNode(jsonArray[i].empId));
            td2.appendChild(document.createTextNode(jsonArray[i].empName));
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);

            var emp = new Employee();
            emp.setName(jsonArray[i].empName);
            emp.setId(jsonArray[i].empId);
            emp.setDob(jsonArray[i].DOB);
            emp.setExperience(jsonArray[i].Experience);
            emp.setPhone(jsonArray[i].Phone);
            emp.setCity(jsonArray[i].City);
            emp.setEmpDesignation(jsonArray[i].Designation);
            console.log(" ** "+emp.getId());
            employeesArray.push(emp);
        }
        empdiv.appendChild(table);
        console.log(" * "+ employeesArray);

    });
}

function loadJson(callback)
{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'employes.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function displayDetails(id)
{
    var details = document.getElementById("details");
    details.innerHTML = "";
    var name = document.createElement("p");
    var phone = document.createElement("p");
    var experience = document.createElement("p");
    var dob = document.createElement("p");
    var city = document.createElement("p");
    var designatoin = document.createElement("p");
    for(var i=0;i<employeesArray.length;i++)
    {
        var emp = employeesArray[i];
        if(employeesArray[i].getId() == id)
        {
            name.innerHTML = "<b> Name : </b>" + employeesArray[i].getName();
            experience.innerHTML = "<b> Experience : </b>"+employeesArray[i].getExperience();
            phone.innerHTML = "<b> Phone : </b>"+employeesArray[i].getPhone();
            dob.innerHTML = "<b> DOB : </b>"+employeesArray[i].getDob();
            city.innerHTML = "<b> City : </b>"+employeesArray[i].getCity();
            designatoin.innerHTML = "<b> Designation : </b>"+employeesArray[i].getEmpDesignation();

            details.appendChild(name);
            details.appendChild(designatoin);
            details.appendChild(experience);
            details.appendChild(phone);
            details.appendChild(dob);
            details.appendChild(city);
        }
    }

}*/
