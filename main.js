getAllData = () => {

    let resultElement = document.getElementById('getResult');
  
    resultElement.innerHTML = '';
  
    fetch('http://localhost:3000/products')
  
      .then((result) => {
  
        if (!result.ok) {
  
          throw new Error(`Błąd: ${result.status} - ${result.statusText}`);
  
        }
  ///
        return result.json();
  
      })
  
      .then((data) => {
  
        resultElement.innerHTML =
  
          "<div class='alert alert-secondary mt-2' role='alert'><pre>" +
  
          JSON.stringify(data, null, 2) +
  
          '</pre></div>';
  
      });
  
  };