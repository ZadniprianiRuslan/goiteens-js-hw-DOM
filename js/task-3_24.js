// bind

function gratitude(clientName) {
  return `${clientName}, дякуємо за використання нашого сервісу «${this.serviceName}».`;
}

const service = {
  serviceName: "Steam",
};
const serviceGreeter = gratitude.bind(service);
console.log(serviceGreeter("Andrew"));