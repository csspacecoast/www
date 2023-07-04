window.addEventListener("load", function() {
  var subjects = [
    "Christian Science",
    "God",
    "Sacrament",
    "Life",
    "Truth",
    "Love",
    "Spirit",
    "Soul",
    "Mind",
    "Christ Jesus",
    "Man",
    "Substance",
    "Matter",
    "Reality",
    "Unreality",
    "Are Sin, Disease, and Death Real?",
    "Doctrine of Atonement",
    "Probation After Death",
    "Everlasting Punishment",
    "Adam and Fallen Man",
    "Mortals and Immortals",
    "Soul and Body",
    "Ancient and Modern Necromancy, alias Mesmerism and Hypnotism, Denounced",
    "God the Only Cause and Creator",
    "God the Preserver of Man",
    "Is the Universe, Including Man, Evolved by Atomic Force?"
  ];
  var startDate = moment("2016-06-27");
  var weeksSinceStart = moment().diff(startDate, "weeks");
  var subjectIndex = weeksSinceStart % subjects.length;
  var currentSubject = subjects[subjectIndex];
  var subjectSpan = document.getElementById("bible-lesson-subject");
  subjectSpan.innerHTML = currentSubject;
});
