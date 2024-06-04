document.addEventListener("DOMContentLoaded", (e) => {
  const subjects = [
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
    "Is the Universe, Including Man, Evolved by Atomic Force?",
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
    "Is the Universe, Including Man, Evolved by Atomic Force?",
    "Christian Science",
    "Christ Jesus (probably? it's a 53rd Sunday)",
  ];
  const now = new Date();
  const nextSunday = getNextSunday(new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()+6)));
  const yearFirstSunday = getNextSunday(new Date(Date.UTC(nextSunday.getUTCFullYear(), 0, 1)));
  const weekMillis = 1000 * 60 * 60 * 24 * 7;
  const sundayNumber = Math.floor((nextSunday - yearFirstSunday) / weekMillis);
  const currentSubject = subjects[sundayNumber];
  var subjectSpan = document.getElementById("bible-lesson-subject");
  subjectSpan.innerHTML = currentSubject;
});

function getNextSunday(d) {
  if (d.getUTCDay() != 0) {
    d.setUTCDate(d.getUTCDate() + (7 - d.getUTCDay()));
  }
  return d;
}
