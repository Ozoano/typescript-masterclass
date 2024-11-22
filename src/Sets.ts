// sets with custome types

interface Uzer {
  email: string;
  score: number;
}

const Uzers = new Set<Uzer>();

const uzer1: Uzer = { email: "ozoanoobi@gmail.com", score: 100 };
const uzer2: Uzer = { email: "ozoanoobi@gmail.com", score: 100 };

Uzers.add(uzer1);
Uzers.add(uzer2);

// console.log(uzers);


// sets as function args

function LogEmail(uzer: Set<Uzer>): void {
  Uzers.forEach((user) => {
    console.log(user.email);
  });
}

LogEmail(Uzers);
