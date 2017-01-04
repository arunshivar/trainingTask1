/**
 * Created by Arun on 1/3/2017.
 */
var Employee = function()
{
    var _empId;
    var _empName;
    var _empDob;
    var _empExperience;
    var _empPhone;
    var _empCity;
    var _empDesignation;
    function getId() {
        return _empId;
    }
    function  getEmpDesignation() {
        return _empDesignation;
    }
    function getName() {
        return _empName;
    }
    function getDob() {
        return _empDob;
    }
    function getExperience() {
        return _empExperience;
    }
    function getPhone() {
        return _empPhone;
    }
    function getCity() {
        return _empCity;
    }
    function setId(id)
    {
        _empId = id;
    }
    function setName(name)
    {
        _empName = name;
    }
    function setDob(dob)
    {
        _empDob = dob;
    }
    function setExperience(experience)
    {
        _empExperience = experience;
    }
    function setPhone(phone)
    {
        _empPhone = phone;
    }
    function setCity(city)
    {
        _empCity = city;
    }
    function  setEmpDesignation(designation) {
        _empDesignation = designation;
    }

    return{
        "getId" : getId,
        "getName" : getName,
        "getDob" : getDob,
        "getExperience" : getExperience,
        "getPhone" : getPhone,
        "getCity" : getCity,
        "getEmpDesignation" : getEmpDesignation,
        "setName" : setName,
        "setId" : setId,
        "setExperience" : setExperience,
        "setDob" : setDob,
        "setPhone" : setPhone,
        "setCity" : setCity,
        "setEmpDesignation" : setEmpDesignation
    }

}