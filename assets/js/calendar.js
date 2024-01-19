document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: "bootstrap5",
    initialView: "dayGridMonth",
    contentHeight: 650,
    headerToolbar: {
      start: "title", // will normally be on the left. if RTL, will be on the right
      center: "",
      end: "prev next", // will normally be on the right. if RTL, will be on the left
    },
  });
  calendar.render();
});
