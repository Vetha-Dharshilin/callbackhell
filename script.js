const countdownElement = document.getElementById('countdown');

let count = 10;

const countdown = () => {
  countdownElement.textContent = count;
  count--;

  if (count < 0) {
    countdownElement.textContent = 'Happy Independence Day!';
    return;
  }

  setTimeout(countdown, 1000);
};

countdown();