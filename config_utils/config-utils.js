function getTimestamp() {
  const date = new Date();

  const pad = (number) => String(number).padStart(2, '0');

  const dateParts = [
    date.getFullYear(),
    pad(date.getMonth()),
    pad(date.getDate()),
  ];

  const timeParts = [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds()),
  ];

  return `${dateParts.join('-')}_-_${timeParts.join('-')}`;
}

module.exports = { getTimestamp };
