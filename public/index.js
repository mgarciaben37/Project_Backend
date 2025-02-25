
    document.querySelector('formulario').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

      const formData = new FormData(this); // Crea un objeto FormData a partir del formulario

      // Puedes usar fetch para enviar los datos al servidor
      fetch('http://localhost:3000/books', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log('Éxito:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
