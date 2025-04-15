export function getAuthKey() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        dateTime: "dd mm yy",
      });
    }, 1000);
  });
}
