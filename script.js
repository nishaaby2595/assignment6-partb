let mdl1=document.querySelector('.modal1');
let mdl2=document.querySelector('.modal2');
let mdl3=document.querySelector('.modal3');
let clse=document.querySelector('.close');


function resetModal() {
    $('#name').val(''); // Clear the input field
    $('#email').val('');
    $('#phone').val('');
    $('#date').val('');
    $('#time').val('');
    $('#people').val('');
    $('.msg').text(''); // Clear the message
}

$('#btn1').click(function(){
    resetModal();
  $(mdl1).show();
  $(mdl2).hide();
  $(mdl3).hide();
  $(clse).show();
})

$('#subsel').click(function(event){
    event.preventDefault();//to make sure not to close the modal window on hitting submit button which is the default behaviour
    const name = $('#name').val();
    const email = $('#email').val();
    const phone = $('phone'.val();
    const date = $('#date').val();
    const time = $('#time').val();
    const people = $('#people').val();

    if(name && email && phone && date && time && people){
        $('.msg').text(`Reservation successful for ${name} at ${time} on ${date} for ${people} people.`);
    } else {
        $('.msg').text('Please fill out all fields.');
    }
});

$('#subsel1').click(function(event){
  resetModal();
  $(mdl3).hide();

});


$('.close').click(function(){
  $(mdl1).hide();
  $(mdl2).hide();
  $(mdl3).hide();
  $(clse).hide();

})

$('#btn2').click(function(){
  $(mdl1).hide();
  $(mdl2).show();
  $(mdl3).hide();

})

$('#btn3').click(function(){
  $(mdl1).hide();
  $(mdl2).hide();
  $(mdl3).show();

})
