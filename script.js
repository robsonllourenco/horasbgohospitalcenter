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

    displayResult(totalServiceHours);
}

function calculateTimeDifference(start, end) {
    var startTime = new Date('1970-01-01T' + start + 'Z');
    var endTime = new Date('1970-01-01T' + end + 'Z');

    var timeDifference = endTime - startTime;
    return timeDifference / (1000 * 60 * 60);
}

function displayResult(totalServiceHours) {
    var resultContainer = document.getElementById('result');
    var formattedDuration = formatDuration(totalServiceHours);

    resultContainer.textContent = 'Seu total de horas de serviço: ' + formattedDuration;
}

function formatDuration(hours) {
    var totalSeconds = hours * 3600;
    var hoursComponent = Math.floor(totalSeconds / 3600);
    var minutesComponent = Math.floor((totalSeconds % 3600) / 60);
    var secondsComponent = Math.floor(totalSeconds % 60);

    return hoursComponent + ' horas e ' + minutesComponent + ' minutos';
}
