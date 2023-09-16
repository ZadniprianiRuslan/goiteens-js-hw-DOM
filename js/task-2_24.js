// apply

function goPay(massage) {
  console.log(`${this.username} ${massage}.`);
}

const customer1 = {
  username: "CustomerN1",
};

goPay.apply(customer1, ["пройдіть до каси для оплати товарів"]);
