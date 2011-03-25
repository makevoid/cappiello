$(function(){
  
  function open_in_textmate(path) {
    app_name = "cappiello"
    url = "txmt://open?url=file://~/Sites/"+app_name+"/"+path
    document.location = url
  }
  
  $("#edit_css").click(function(){
    file = "public/stylesheets/sass/main.sass"
    open_in_textmate(file)
  })
  
  $("#edit_view").click(function(){ 
    file = "app/views/"+resources+"/"+action+".html.haml"
    open_in_textmate(file)
  })
})