
interface User{
    name: string,
    email: string
}

interface User{
    phoneNumber: number,
    address: varchar,
    pincode: number
}

const user11: User = {
    name: 'dafa',
    email: '',
    phoneNumber: 423423424,
    address: 4234234234,
    pincode: 42423
}
type user = {
    name: string
    email: string
}


type depart = {
    department: string
}

type Admin = user & depart;

// ReteLimit: RateLimit means limit of requests. It will tell the lambda how many request hould handle in perticular time.
// For exam we have the 100 reat limit it will take 1oo if 101 came it wil throw error too ma y re429 error

// Thorttlig; Throttiling also same but insted of throwing error immeidatly it will hold or buffering the server, waiting will be happen. To overcome this problam will use the concurracy... 