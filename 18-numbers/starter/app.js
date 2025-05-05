const numbers = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const incrementValue = Math.ceil(value / 1000);
  let startValue = 0;

  const increaseCount = setInterval(() => {
    startValue += incrementValue;
    if (startValue >= value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${startValue}+`;
  }, 10);
};

numbers.forEach((number) => updateCount(number));
