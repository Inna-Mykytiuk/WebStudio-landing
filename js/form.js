(() => {
  document
    .querySelector(".order-form")
    .addEventListener("submit", (el) => {
    el.preventDefault();

      new FormData(el.currentTarget)
        .forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    el.currentTarget.reset();
  });
})();
