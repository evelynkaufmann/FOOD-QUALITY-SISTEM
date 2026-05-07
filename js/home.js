document.addEventListener('DOMContentLoaded', function () {

    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: 'dayGridMonth',

        locale: 'pt-br',

        height: 'auto',

        events: [

            {
                title: 'Inspeção Produção',
                start: '2026-05-10'
            },

            {
                title: 'Treinamento BPF',
                start: '2026-05-15'
            },

            {
                title: 'Auditoria Interna',
                start: '2026-05-22'
            }

        ]

    });

    calendar.render();

});