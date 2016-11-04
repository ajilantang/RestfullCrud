'use strict'
//---------------------------
//create costumer
//----------------------------
function addCustomer(){
  $(document).ready(function(){
    customerData = {
      name      : $('#customerName').val(),
      memberId  : $('#customerId').val(),
      address   : $('#customerAddress').val(),
      zip       : $('#customerZip').val(),
      phone     : $('#customerPhone').val()
    }
    sendCustData(customerData);//send data to create
  })
}
//function to create in mongo
function sendCustData(customerData){
  $.ajax({
    url         : "http://localhost:3000/api/memo",
    method      : 'post',
    contentType : 'application/x-www-form-urlencoded',
    data        : {data:customerData}
  ,
    success     : function (data){
    console.log("--------",data)
      let resultHTML = `<tr id="${data._id}">
      <td>${data.memberId}</0td>
      <td>${data.name}</td>
      <td>${data.address}</td>
      <td>${data.zip}</td>
      <td>${data.phone}</td>
      <td>${data.phone}</td>
      <td><button  class="btn btn-default" onclick="deleteCustomer(${data._id})">Delete</button></td>
      <td><button class="btn btn-default" onclick="updateCustomer(${data._id})">Update</button></td>
      </tr>`
      $("#listOfCustomers").append(resultHTML)
    }
  })
}

//show all data using ajax

$(document).ready(function(){
  $.ajax({
    url         : "http://localhost:3000/api/memo",
    method      : 'get',
    contentType : 'application/x-www-form-urlencoded',
    data        : {},
    success: function(data) {
      console.log(data)
         var html = "";
         for(var i = 0; i < data.length; i++){
           html += `<tr id = "${data[i]._id}">
           <td>${data[i].memberId}</td>
           <td>${data[i].name}</td>
           <td>${data[i].address}</td>
           <td>${data[i].zip}</td>
           <td>${data[i].phone}</td>
           <td><button  class="btn btn-default" onclick="deleteCustomer(${data[i]._id})">Delete</button></td>
           <td><button  class="btn btn-default" onclick="updateCustomer(${data[i]._id})">Update</button></td>
           </tr>`

         }
         $('#listOfCustomers').append(html)
       }
  })
})

//-----------------------------------
//the end of create
//------------------------------------
function deleteCustomer(id){
  console.log(id+"aja");
  $.ajax({
    url         : "http://localhost:3000/customer/delete/"+id,
    method      : 'delete',
    contentType : 'application/x-www-form-urlencoded',
    data        : {'id':id},
    success     : function(data) {
      $(`#${id}`).remove();
    }
  })
}
