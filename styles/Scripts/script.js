/*Обработка наличия checked*/
  function showOrHide(cb, limitationButton) {
    cb = document.getElementById(cb);
    var limitationButton = document.getElementById(limitationButton);
    if (cb.checked) limitationButton.disabled = false;
    else limitationButton.disabled = true;
  }

/*Обработка события onclick и запуск воспроизведения*/  
  function hide(nodeId)
  {
    var node = document.getElementById(nodeId);
    if (node)
    {
        node.style.display = 'none';
    } 
  }

  
