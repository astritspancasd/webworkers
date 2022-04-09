onmessage = (message) => {
  console.log(message.data);

  let sum = 0;
  for (let i = 1; i < 100000000000; i++) {
    sum += i;
  }

  postMessage(sum);
};
