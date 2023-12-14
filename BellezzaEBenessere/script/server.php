<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
    <?php
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        session_start();
        include_once "../db/db_credential.php";
        $db_conn = new mysqli($host, $username, $pass, $db);
        if($db_conn->connect_error)
        {
            die("Connection failed" . $db_conn->connect_error);
        }
        echo "ciao";
        if(isset($_POST["nome"]))
        {
            $nome = $_POST["nome"];
            $cognome = $_POST["cognome"];
            $email = $_POST["email"];
            $n_telefono = $_POST["n_telefono"];
            $data_nascita = $_POST["data_nascita"];
            $note = $_POST["note"];

            $stmt = $db_conn->prepare("INSERT INTO cliente(nome, cognome, email, n_telefono, data_nascita, note) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssss", $nome, $cognome, $email, $n_telefono, $data_nascita, $note);
            $stmt->execute();
            echo ($stmt);
        }

    ?>
    </body>
</html>