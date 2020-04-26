import faker from "faker";
import dayjs from "dayjs";

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const newPerson = (idx) => {
  const statusChance = Math.random();
  return {
    ["index+1"]: idx + 1,
    client: faker.name.findName(),
    email: faker.internet.email(),
    src: "https://source.unsplash.com/random/50x50",
    issueDate: dayjs(randomDate(new Date(2019, 0, 1), new Date())).format(
      "DD MMM YYYY"
    ),
    dueDate: dayjs(randomDate(new Date(2019, 0, 1), new Date())).toNow(),
    amount:
      "RM " +
      new Intl.NumberFormat("en-MY", { maximumSignificantDigits: 3 }).format(
        Math.floor(Math.random() * 10000)
      ),
    status:
      statusChance > 0.66
        ? "Paid"
        : statusChance > 0.33
        ? "Pending"
        : "Overdue",
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((idx) => {
      return {
        ...newPerson(idx),
      };
    });
  };

  return makeDataLevel();
}
