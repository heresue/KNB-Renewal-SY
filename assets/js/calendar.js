document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    // contentHeight: 650,
    aspectRatio: 2,
    headerToolbar: {
      start: "title", // will normally be on the left. if RTL, will be on the right
      center: "",
      end: "prev next", // will normally be on the right. if RTL, will be on the left
    },
    initialDate: "2024-01-01",
    eventColor: "#d92b2b",
    events: [
      {
        title: "해설이 있는 전막 발레 해적-강릉",
        start: "2024-01-31",
        end: "2024-01-31",
      },
      {
        title: "백조의 호수-부산",
        start: "2024-03-15",
        end: "2024-03-15",
      },
      {
        title: "백조의 호수-부산",
        start: "2024-03-16",
        end: "2024-03-16",
      },
      {
        title: "백조의 호수-서울",
        start: "2024-03-27",
        end: "2024-03-31",
      },
    ],
  });
  calendar.render();
});
