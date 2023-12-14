(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    const inputs = document.querySelectorAll('input');

    const emailRegex = /^([a-z0-9._-]+)(@[a-z0-9.-_]+)(.{1}[a-z]{2,6})$/;
    const nameRegex = /^[a-zA-Zàìòùè]*$/;
    const numberRegex = /^[0-9]{8,10}$/;
    let n_valid_input = document.querySelectorAll(".is-valid");


    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('change', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        let email = document.getElementById("email");
        email.value = email.value.toLowerCase();
        compare(email, emailRegex);
        let nome = document.getElementById("nome");
        compare(nome, nameRegex);
        let cognome = document.getElementById("cognome");
        compare(cognome, nameRegex);
        let n_telefono = document.getElementById("n-telefono");
        compare(n_telefono, numberRegex);

        n_valid_input = document.querySelectorAll(".is-valid");
        form.classList.add('was-validated')
      }, false)
    })

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            let n_valid_input = document.querySelectorAll(".is-valid");
            if(inputs.length-1 == n_valid_input.length)
            {
                let email = document.getElementById("email").value.toLowerCase();
                let nome = document.getElementById("nome").value;
                let cognome = document.getElementById("cognome").value;
                let n_telefono = document.getElementById("n-telefono").value;
                let data_nascita = document.getElementById("data-nascita").value;
                let note = document.getElementById("note").value;
                if(note.lenght == 0)
                {
                    note = NULL;
                }

                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () 
                {
                    console.log(this.readyState);
                    if(this.readyState == 4 && this.status == 200)
                    {
                        let div = document.getElementById("response");
                        div.innerHTML = this.responseText;
                    }
                }
                let postObj = 
                    "nome=" + nome +
                    "&cognome=" + cognome +
                    "&email=" + email +
                    "&data_nascita=" + data_nascita +
                    "&n_telefono=" + n_telefono +
                    "&note=" + note;
                
                xhr.open('POST', "http://localhost:8080/BellezzaEBenessere/script/server.php", true);
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
                console.log(postObj);
                xhr.send(postObj);
            }
        })
    })
    

    function compare(input, validRegex) {
          if (validRegex.test(input.value) && input.value != "") 
          {
            console.log("valido", input);

              input.classList.remove('is-invalid');
              input.classList.add('is-valid');
          } 
          else 
          {
            console.log("invalido", input);
              input.classList.remove('is-valid');
              input.classList.add('is-invalid');
          }
        }
})()


    /*Array.from(form_input).forEach(input => {
        input.addEventListener('change',  event => {
            let xhr = new XMLHttpRequest();
            let id = input.name;
            let value = input.value;
            let postObj = 
            {
                id : value,
            }
            let post = JSON.stringify(postObj);
            xhr.open('POST', "../script/server.php", true)
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
            xhr.send(post);
        })
    })

  })()*/

