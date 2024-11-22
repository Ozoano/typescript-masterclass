// ExtendTypeAliase.ts

// ---------------
// Extending type Aliases
// ----------------

type Persons = {
    id: string | number
    name: string
}


// Extending type Aliases
type user = Persons & {
    email: string,

}

const personOne = {
    id: 1,
    name: "mario"
}

const personTwo = {
    id: "2",
    name: "Mario",
    email: "Mario@gmail.com"
}

const personThree = {
    email: "Mario@gmail.com"
}

function printuser (User:user) {
    console.log(User.id, User.email, User.name)
}

printuser(personTwo)
// printuser(personThree)