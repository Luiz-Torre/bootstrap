function showToast(e){
    e.preventDefault()     
    $("#myToast").toast('show'); 
    document.getElementsByName('data-form')[0].reset()
}