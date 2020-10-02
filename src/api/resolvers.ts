import { IResolvers } from "apollo-server-micro";

const calcAge = () => {
    const dob = new Date(2005, 10, 4)
    const diff_ms = Date.now() - dob.getTime();

    const age_diff = new Date(diff_ms)

    return Math.abs(age_diff.getUTCFullYear() - 1970)
}

const resolvers: IResolvers<any, any> = {
    Query: {
        rishi: async () => {
            
            return {
                name: "Rishi Kothari",
                age: calcAge(),
                birthday: "October 4th, 2005",
                mood: await fetch("https://jsonbin.org/rishiosaur/rishi/mood", {
                    headers: {
                        'Authorization': 'token ' + "547fec3d-9db6-4433-ad3f-9e3192ae54a2"
                    },
                    
                }).then(x => x.text())
            }
        }
    }
}

export default resolvers