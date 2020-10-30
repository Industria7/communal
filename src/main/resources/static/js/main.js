$(document).ready(function(){

$("#productInput").autocomplete({
      source: function( request, response ) {
        $.ajax( {
          url: "/search/product",
          dataType: "json",
          data: {
            term: request.term
          },
          success: function( data ) {
            response( data );
          }
        } );
      },
      minLength: 0,
      select: function( event, ui ) {
                $('#product').append('<tr>'+
                '<td><input name="product[]" type="text" value="' + ui.item.label + '" readonly="readonly" style="width:300px;" class="input-box"/>'+
                '<input value="' + ui.item.value + '" type="hidden" name="productId[]"></td>'+
                '<td><input name="grossYoungerGroup[]" type="number" step="0.01" min="0" style="width:100px;" required="" autocomplete="off" class="input-box"/></td>'+
                '<td><input name="quantityYoungerGroup[]" type="number" step="0.01" min="0" style="width:100px;" required="" autocomplete="off" class="input-box"/></td>'+
                '<td><input name="grossSeniorGroup[]" type="number" step="0.01" min="0" style="width:100px;" required="" autocomplete="off" class="input-box"/></td>'+
                '<td><input name="quantitySeniorGroup[]" type="number" step="0.01" min="0" style="width:100px;" required="" autocomplete="off" class="input-box"/></td>'+
                '<td><a class="delButton text-danger" href="javascript:void(0)">[—]</a></td>'+
                '</tr>');
                $('#productInput').val("");
                return false;
      }
}).on('click', function () {
       $(this).autocomplete("search");
});

$('#product').on('click', '.delButton', function(){
el = this.closest("tr");
el.parentElement.removeChild(el);
});

$("#rAndPInput1, #rAndPInput2, #rAndPInput3").autocomplete({
      source: function( request, response ) {
        $.ajax( {
          url: "/search/position",
          dataType: "json",
          data: {
            term: request.term
          },
          success: function( data ) {
            response( data );
          }
        } );
      },
      minLength: 0,
      select: function( event, ui ) {
         var id = $(this).prop('id');
         if (ui.item.recipe) {
            var readonly = ' readonly=""';
         }else {
            var readonly = '';
         }
         var name = ui.item.label;
         name = name.replace(/([/'"])/g, '&quot;');

         if(id == "rAndPInput1") {
             $('#breakfast').append('<tr>'+
              '<td><input class="form-control form-control-sm" type="text" value="' + name + '" required="" readonly="">'+
              '<input name="breakfastId[]" value="' + ui.item.value +'" type="hidden">'+
              '<input name="breakfastIsRecipe[]" value="' + ui.item.recipe +'" type="hidden"></td>'+
              '<td><input class="form-control form-control-sm" name="breakfastQuantityNursery[]" step="0.01" min="0" value="'+ ui.item.yieldNursery +'" type="number" required=""'+ readonly +'></td>'+
              '<td><input class="form-control form-control-sm" name="breakfastQuantityGarden[]" step="0.01" min="0" value="'+ ui.item.yieldGarden +'" type="number" required=""'+ readonly +'></td>'+
              '<td><a class="delButton text-danger" href="javascript:void(0)">[—]</a></td>'+
              '</tr>');
         } else
         if(id == "rAndPInput2") {
            $('#lunch').append('<tr>'+
             '<td><input class="form-control form-control-sm" type="text" value="' + name + '" required="" readonly="">'+
             '<input name="lunchId[]" value="' + ui.item.value +'" type="hidden">'+
             '<input name="lunchIsRecipe[]" value="' + ui.item.recipe +'" type="hidden"></td>'+
             '<td><input class="form-control form-control-sm" name="lunchQuantityNursery[]" step="0.01" min="0" value="'+ ui.item.yieldNursery +'" type="number" required=""'+ readonly +'></td>'+
             '<td><input class="form-control form-control-sm" name="lunchQuantityGarden[]" step="0.01" min="0" value="'+ ui.item.yieldGarden +'" type="number" required=""'+ readonly +'></td>'+
             '<td><a class="delButton text-danger" href="javascript:void(0)">[—]</a></td>'+
             '</tr>');
         } else
         if(id == "rAndPInput3") {
            $('#snack').append('<tr>'+
              '<td><input class="form-control form-control-sm" type="text" value="' + name + '" required="" readonly="">'+
              '<input name="snackId[]" value="' + ui.item.value +'" type="hidden">'+
              '<input name="snackIsRecipe[]" value="' + ui.item.recipe +'" type="hidden"></td>'+
              '<td><input class="form-control form-control-sm" name="snackQuantityNursery[]" step="0.01" min="0" value="'+ ui.item.yieldNursery +'" type="number" required=""'+ readonly +'></td>'+
              '<td><input class="form-control form-control-sm" name="snackQuantityGarden[]" step="0.01" min="0" value="'+ ui.item.yieldGarden +'" type="number" required=""'+ readonly +'></td>'+
              '<td><a class="delButton text-danger" href="javascript:void(0)">[—]</a></td>'+
              '</tr>');
         }
         $('#'+ id).val("");
         return false;
      }
}).on('click', function () {
       $(this).autocomplete("search");
});

$('#breakfast, #lunch, #snack').on('click', '.delButton', function(){
el = this.closest("tr");
el.parentElement.removeChild(el);
});

$('.table-filters input').on('input', function () {
    filterTable($(this).parents('table'));
});

function filterTable($table) {
    var $filters = $table.find('.table-filters td');
    var $rows = $table.find('.table-data');
    $rows.each(function (rowIndex) {
        var valid = true;
        $(this).find('td').each(function (colIndex) {
            if ($filters.eq(colIndex).find('input').val()) {
                if ($(this).html().toLowerCase().indexOf(
                $filters.eq(colIndex).find('input').val().toLowerCase()) == -1) {
                    valid = valid && false;
                }
            }
        });
        if (valid === true) {
            $(this).css('display', '');
        } else {
            $(this).css('display', 'none');
        }
    });
};

$('.table-data').on('click', '#presence', function(){
   var $row = $(this).closest('tr');
   if ($(this).is(':checked')){
	$row.find('#breakfast').prop('checked', true);
    $row.find('#lunch').prop('checked', true);
    $row.find('#snack').prop('checked', true);
    save($row);
	} else {
	if (confirm("Вы уверены?")) {
    $row.find('#breakfast').prop('checked', false);
    $row.find('#lunch').prop('checked', false);
    $row.find('#snack').prop('checked', false);
    save($row);
    }
	}
});


$('.table-data').on('click', '#breakfast', function(){
  var $row = $(this).closest('tr');
  save($row);
});

$('.table-data').on('click', '#lunch', function(){
  var $row = $(this).closest('tr');
  save($row);
});

$('.table-data').on('click', '#snack', function(){
  var $row = $(this).closest('tr');
  save($row);
});

function save($row){
  var tableId = $row.find('#tableId').val();
  var breakfast = $row.find('#breakfast').is(':checked');
  var lunch = $row.find('#lunch').is(':checked');
  var snack = $row.find('#snack').is(':checked');
  if(!breakfast & !lunch & !snack){
    $row.find('#presence').prop('checked', false);
  }else if (breakfast || lunch || snack) {
      $row.find('#presence').prop('checked', true);
    }
  $.post("attendance", {
    id: tableId,
    breakfast: breakfast,
    lunch: lunch,
    snack: snack
  }
  );
}

$('#products').tokenfield({
  autocomplete: {
    source: function( request, response ) {
      $.ajax( {
         url: "/search/product",
         dataType: "json",
         data: {
           term: request.term
         },
         success: function( data ) {
           response( data );
         }
      } );
    },
    minLength: 0,
    delay: 100
   },
  showAutocompleteOnFocus: false,
  allowEditing: false,
  allowPasting: false,
  minWidth: 250
});

$('#products').on('tokenfield:createtoken', function (event) {
  var existingTokens = $(this).tokenfield('getTokens');
  $.each(existingTokens, function(index, token) {
  if (token.value === event.attrs.value)
     event.preventDefault();
  });
});

$('#products-tokenfield').on('click', function () {
 $(this).autocomplete('search', $(this).val());
});

$('.productData').on('change', 'input', function(){
var inputData = [];
var tr = $(this).closest("tr");
var td = $(this).closest("td");
var container = $(this).closest('.container');

var menuId = $(container).find('input[name="menuId"]').val();
var id = $(tr).find('input[name="id"]').val();
var name = $(td).find('input').attr("name");
$(td).children('input').each(function(){
   inputData.push($(this).val());
});

$.ajax({
        url:     '/menu/tuning',
        type:     "POST",
        dataType: "json",
        data: "id="+id+"&name="+name+"&data="+inputData+"&menuId="+menuId,
        success: function(response) {
            $(tr).find('input[name="weightGarden"]').val(response.garden.toFixed(3));
            $(tr).find('input[name="weightNursery"]').val(response.nursery.toFixed(3));
            $(tr).find('input[name="allWeight"]').val(response.all.toFixed(3));

            if ($(container).find('#defButton').css('display') == "none") {
                $(container).find('#defButton').css("display", "block");
            }
            $('#info').css('display', 'block').fadeOut(2000);
    	},
    	error: function(response) {
            alert("Ошибка. Данные не сохранены.");
    	}
 	});
});
});

