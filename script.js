<!DOCTYPE html>
<html lang="en">
    <link rel="icon" href="favicon.png" type="image/x-icon">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BGO Hospital Center</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>Calculadora de Horas de Serviço<br>do BGO Hospital Center</h1>
<h2>Desenvolvido pelo MINISTRO [273]</h2>

    <form id="serviceForm">
        <label for="startTime">Início de Serviço:</label>
        <input type="time" id="startTime" required>

        <div id="breaksContainer">
            <div class="break">
                <label for="breakStart1">Pausa:</label>
                <input type="time" class="break-start" id="breakStart1" required>
                <label for="breakEnd1">Retorno da pausa:</label>
                <input type="time" class="break-end" id="breakEnd1" required>
            </div>
        </div>

        <button type="button" onclick="addBreak()">Adicionar mais pausa</button>
<br>
<br>
        <label for="endTime">Fim de Serviço:</label>
        <input type="time" id="endTime" required>

        <button type="button" onclick="calculateServiceHours()">Calcular Horas</button>
    </form>

    <div id="result">
        <p id="resultMessage"></p>
        <button onclick="hideResult()">Fechar</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
