

function Hack() {
  fetch('http://localhost:8081/tutorial/22b9d41a5bd50dcb4603cc5652f4aa10')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response)
    return response.text(); 
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  
  // const tutorialId = '701b1d1b129e231650b2edef521bfffc';
  // fetchTutorial(tutorialId);
  

}