function init(){
    document.getElementById('manifest').addEventListener('change', handleFileSelect, false);
  }
  
  function handleFileSelect(event){
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
  }
  function handleFileLoad(event){
    document.getElementById("target").innerHTML = JSON.parse(event.target.result)["header"]["uuid"];
  }
init();
document.getElementById("copy_uuid").addEventListener("click", function(e) {
  copyToClipboard(document.getElementById("target").innerHTML);
});
