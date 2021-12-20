// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

export const formatHours = (time) => {
  let h = Math.floor(time / 3600);
  h = h.toString();
  if (h.length < 2) h = "0" + h;
  return h;
};

export const formatMinutes = (time) => {
  let m = Math.floor((time % 3600) / 60);
  m = m.toString();
  if (m.length < 2) m = "0" + m;
  return m;
};

export const formatSeconds = (time) => {
  let s = Math.floor(time % 60);
  s = s.toString();
  if (s.length < 2) {
    s = "0" + s;
  }
  return s;
};

// {timerQueue.length > 0
//   ? timerQueue
//       .map((timer) => timer.totalLength)
//       .reduce((prev, next) => prev + next)
//   : " 0"}
