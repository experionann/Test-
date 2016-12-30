var ids = new Array();

$(function () {
    $("#datepicker").datepicker({
        format: 'dd/mm/yyyy',

        todayHighlight: true,
        autoclose: true,
    });



   $('#submit').click(function (e) {
        e.preventDefault();
        if ($('#refno').val() == "") {
            alert('Please fill the ref no field');
        }
        else if ($('#datepicker').val() == "") {
            alert('Please fill the date field');
        }
        else if ($('#time').val() == "") {
            alert('Please enter the accident time');
        }
        else if ($('#acdttype').val() == "--Select--") {
            alert('Please select the acdttype');
        }
        else if ($('#city').val() == "") {
            alert('Please fill the city field');
        }
        else if ($('#district').val() == "--Select--") {
            alert('Please fill the district field');
        }
        else if ($('#vehicles').val() == "") {
            alert('Please fill the vehicles field');
        }
        else if ($('#casuality').val() == "") {
            alert('Please fill the casuality field');
        }
        else if ($('#name').val() == "") {
            alert('Please fill the name field');
        }
        else {
            var i;
            var flag = 0;

            var new_refno = $('#refno').val();
            var new_dob = $('#datepicker').val();
            var new_time = $('#time').val();
            var new_acdttype = $('#acdttype').val();
            var new_city = $('#city').val();
            var new_district = $('#district').val();
            var new_vehicles = $('#vehicles').val();
            var new_casuality = $('#casuality').val();
            var new_name = $('#name').val();
            for (i = 0; i < ids.length; i++) {
                if (new_refno === ids[i]) {
                    flag = 1;
                }
            }
            if (flag === 0) {
                console.log("working");
                var newRow = jQuery('<tr><td>' + new_refno + '</td><td>' + new_dob + '</td><td>' + new_time + '</td><td>' + new_acdttype + '</td><td>' + new_city + '</td><td>' + new_district + '</td><td>' + new_vehicles + '</td><td>' + new_casuality + '</td><td>' + new_name + '</td></tr>');
                jQuery('#t1').append(newRow);
                
                ids.push(new_refno);
            }
            
        }


    });


     $('#edit').click(function () {
         
        $("#editable").hide();
        // $("#submit1").hide();
        
    });

$('#confirm').click(function () {
      $(".form-horizontal").hide("slow", function(){
           alert("The details are stored in the system.");
         });
     
});
     });



// $("#confirm").dblclick(function(){
//         window.close();
//     });