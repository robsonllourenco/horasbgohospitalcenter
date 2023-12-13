var breakCount = 1;

function addBreak() {
    breakCount++;

    var breaksContainer = document.getElementById('breaksContainer');

    var breakDiv = document.createElement('div');
    breakDiv.classList.add('break');

    breakDiv.innerHTML = `
        <label for="breakStart${breakCount}">Pausa ${breakCount}:</label>
        <input type="time" class="break-start" id="breakStart${breakCount}" required>
        <label for="breakEnd${breakCount}">Retorno da pausa ${breakCount}:</label>
        <input type="time" class="break-end" id="breakEnd${breakCount}" required>
    `;

    breaksContainer.appendChild(breakDiv);
}

function calculateServiceHours() {
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;

    var breaks = document.querySelectorAll('.break');
    var totalBreakDuration = 0;

    breaks.forEach(function (breakDiv) {
        var breakStart = breakDiv.querySelector('.break-start').value;
        var breakEnd = breakDiv.querySelector('.break-end').value;

        if (breakStart && breakEnd) {
            var breakDuration = calculateTimeDifference(breakStart, breakEnd);
            totalBreakDuration += breakDuration;
        }
    });

    var serviceDuration = calculateTimeDifference(startTime, endTime);
    var totalServiceHours = serviceDuration - totalBreakDuration;

    showResult(totalServiceHours);
}

function calculateTimeDifference(start, end) {
    var startTime = new Date('1970-01-01T' + start + 'Z');
    var endTime = new Date('1970-01-01T' + end + 'Z');

    // Adiciona 24 horas ao endTime se for anterior ao startTime
    if (endTime < startTime) {
        endTime.setHours(endTime.getHours() + 24);
    }

    var timeDifference = endTime - startTime;
    return timeDifference / (1000 * 60 * 60);
}

function showResult(totalServiceHours) {
    var resultContainer = document.getElementById('result');
    var resultMessage = document.getElementById('resultMessage');
    var formattedDuration = formatDuration(totalServiceHours);

    resultMessage.innerHTML = 'Seu total de horas de serviço:<br><br>' + formattedDuration;
    resultContainer.style.display = 'block';
}

function formatDuration(hours) {
    var totalSeconds = hours * 3600;
    var hoursComponent = Math.floor(totalSeconds / 3600);
    var minutesComponent = Math.floor((totalSeconds % 3600) / 60);
    var secondsComponent = Math.floor(totalSeconds % 60);

    return hoursComponent + ' horas e ' + minutesComponent + ' minutos';
}

function hideResult() {
    var resultContainer = document.getElementById('result');
    resultContainer.style.display = 'none';
}
