

/// ancien //////

document.addEventListener('DOMContentLoaded', function () {
  
    var selectedCheckboxSet1 = null;
    var selectedCheckboxSet2 = null;
    var selectedCheckboxSet3 = null;
  
    function updateSelected(checkbox, setNumber) {
      switch (setNumber) {
        case 1:
          if (selectedCheckboxSet1 && selectedCheckboxSet1 !== checkbox) {
            selectedCheckboxSet1.checked = false;
          }
          selectedCheckboxSet1 = checkbox.checked ? checkbox : null;
          updateFloatingImageSrc(selectedCheckboxSet1, 1);
          break;
        case 2:
          if (selectedCheckboxSet2 && selectedCheckboxSet2 !== checkbox) {
            selectedCheckboxSet2.checked = false;
          }
          selectedCheckboxSet2 = checkbox.checked ? checkbox : null;
          updateFloatingImageSrc(selectedCheckboxSet2, 2);
          break;
        case 3:
          if (selectedCheckboxSet3 && selectedCheckboxSet3 !== checkbox) {
            selectedCheckboxSet3.checked = false;
          }
          selectedCheckboxSet3 = checkbox.checked ? checkbox : null;
          updateFloatingImageSrc(selectedCheckboxSet3, 3);
          break;
        default:
          break;
      }
    }
  
    function updateFloatingImageSrc(checkbox, imageNumber) {
      var floatingImage = document.querySelector('.floating-image' + imageNumber);
      if (checkbox) {
        var checkboxId = checkbox.id;
        floatingImage.src = checkboxId + '.png';
      }
    }
  
    // Set default checked checkboxes
    document.getElementById('14').checked = true;
    document.getElementById('24').checked = true;
    document.getElementById('33').checked = true;
  
    // Update floating images based on default checked checkboxes
    updateSelected(document.getElementById('14'), 1);
    updateSelected(document.getElementById('24'), 2);
    updateSelected(document.getElementById('33'), 3);
  
    // Event listeners for checkbox sets
    document.querySelectorAll('.checkbox-set-1 input[type="checkbox"]').forEach(function (checkbox) {
      checkbox.addEventListener('click', function () {
        updateSelected(checkbox, 1);
      });
    });
  
    document.querySelectorAll('.checkbox-set-2 input[type="checkbox"]').forEach(function (checkbox) {
      checkbox.addEventListener('click', function () {
        updateSelected(checkbox, 2);
      });
    });
  
    document.querySelectorAll('.checkbox-set-3 input[type="checkbox"]').forEach(function (checkbox) {
      checkbox.addEventListener('click', function () {
        updateSelected(checkbox, 3);
      });
    });
  });
  
        var selectedCheckboxSet1 = null;
        var selectedCheckboxSet2 = null;
        var selectedCheckboxSet3 = null;
  
    
        function updateSelected(checkbox, setNumber) {
          switch (setNumber) {
            case 1:
              if (selectedCheckboxSet1 && selectedCheckboxSet1 !== checkbox) {
                selectedCheckboxSet1.checked = false;
              }
              selectedCheckboxSet1 = checkbox.checked ? checkbox : null;
              break;
            case 2:
              if (selectedCheckboxSet2 && selectedCheckboxSet2 !== checkbox) {
                selectedCheckboxSet2.checked = false;
              }
              selectedCheckboxSet2 = checkbox.checked ? checkbox : null;
              break;
            case 3:
              if (selectedCheckboxSet3 && selectedCheckboxSet3 !== checkbox) {
                selectedCheckboxSet3.checked = false;
              }
              selectedCheckboxSet3 = checkbox.checked ? checkbox : null;
              break;
            default:
              break;
          }
        }
        function updateFloatingImageSrc(checkbox, imageNumber) {
    var floatingImage = document.querySelector('.floating-image' + imageNumber);
    if (checkbox) {
      var checkboxId = checkbox.id;
      floatingImage.src = checkboxId + '.png';
    }
  }
  
  document.querySelectorAll('.checkbox-set-1 input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      updateSelected(checkbox, 1);
    });
  });
  
  document.querySelectorAll('.checkbox-set-2 input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      updateSelected(checkbox, 2);
    });
  });
  
  document.querySelectorAll('.checkbox-set-3 input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      updateSelected(checkbox, 3);
    });
  });
        
        
      
  function generateLink() {
      var nameValue = document.getElementById('fname').value;
      var ageValue = document.getElementById('age').value;
  
      // Validate input fields
      if (nameValue.trim() === '' || ageValue.trim() === '') {
          alert('Please fill in all required fields.');
          return;
      }
  
      // Initialize variables for checkbox IDs
      var checkbox1 = '14';
      var checkbox2 = '24';
      var checkbox3 = '33';
  
      // Update checkbox IDs if selected
      if (selectedCheckboxSet1) {
          checkbox1 = selectedCheckboxSet1.id;
      }
  
      if (selectedCheckboxSet2) {
          checkbox2 = selectedCheckboxSet2.id;
      }
  
      if (selectedCheckboxSet3) {
          checkbox3 = selectedCheckboxSet3.id;
      }
  
      // Concatenate name, age, and checkbox IDs with '&' as separator
      var link = `https://anessaadi.github.io/cakepreview?a=${nameValue}&${ageValue}&${checkbox1}&${checkbox2}&${checkbox3}`;
  
      // Create modal
      var modal = document.createElement('div');
      modal.className = 'modal';
  
      // Create content for the modal
      var modalContent = '<div class="modal-content">';
      modalContent += '<span class="close" onclick="closeModal()">&times;</span>';
      modalContent += `<p class="txtmodal">Link: <input type="text" id="generatedLink" value="${link}" readonly></p>`;
      modalContent += '<button class="buttonmodal" onclick="copyLink()">Copy Link</button>';
      modalContent += '<div class="copy-message" id="copyMessage">Copied! Share it <3</div>';
      modalContent += '</div>';
      modal.innerHTML = modalContent;
  
      // Append modal to the body
      document.body.appendChild(modal);
  }
    
        function copyLink() {
          var generatedLink = document.getElementById('generatedLink');
          generatedLink.select();
          document.execCommand('copy');
          var copyMessage = document.getElementById('copyMessage');
          copyMessage.style.display = 'inline-block';
          setTimeout(function() {
            copyMessage.style.opacity = '0';
            setTimeout(function() {
              copyMessage.style.display = 'none';
              copyMessage.style.opacity = '1';
              
            }, 500);
          }, 2000);
          
        }
    
        function closeModal() {
          var modal = document.querySelector('.modal');
          modal.parentNode.removeChild(modal);
        }

        /////////
        let menu = document.querySelector('#menu-icon')
        let navlist = document.querySelector('.navlist')

        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open');
        };

        const sr = ScrollReveal({
            distance: '65px',
            duration: 2600,
            delay: 450,
            reset: true,
        });

        sr.reveal('.hero-text', {delay:200, origin:'top'});
        sr.reveal('.hero-img', {delay:450, origin:'top'});
        sr.reveal('.icons', {delay:500, origin:'left'});
        sr.reveal('.scroll-down', {delay:500, origin:'right'});
        /////////
    
        document.querySelectorAll('.checkbox-set-1 input[type="checkbox"]').forEach(function (checkbox) {
          checkbox.addEventListener('click', function () {
            updateSelected(checkbox, 1);
          });
        });
    
        document.querySelectorAll('.checkbox-set-2 input[type="checkbox"]').forEach(function (checkbox) {
          checkbox.addEventListener('click', function () {
            updateSelected(checkbox, 2);
          });
        });
    
        document.querySelectorAll('.checkbox-set-3 input[type="checkbox"]').forEach(function (checkbox) {
          checkbox.addEventListener('click', function () {
            updateSelected(checkbox, 3);
          });
        });
