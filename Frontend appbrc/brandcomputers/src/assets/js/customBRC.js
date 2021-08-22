$(function() {
  $('a[data-toggle="tab"]').on('click', function(e) {
    window.localStorage.setItem('activeTab', $(e.target).attr('href'));
  });
  let activeTab = window.localStorage.getItem('activeTab');

  if (activeTab){
    $('#caseTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }
  if (activeTab){
    $('#cpuCoolerTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }
  if (activeTab){
    $('#fanCaseTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }
  if (activeTab){
    $('#memoryRamTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }
  if (activeTab){
    $('#motherboardTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }
  if (activeTab){
    $('#opticalUnitTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }
  if (activeTab) {
    $('#powerSourceTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }
  if (activeTab){
    $('#processorTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }
  if (activeTab){
    $('#soundCardTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }

  if (activeTab){
    $('#storageTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }

  if (activeTab){
    $('#videoCardTab a[href="' + activeTab + '"]').tab('show');
    window.localStorage.removeItem("activeTab");
  }

});
