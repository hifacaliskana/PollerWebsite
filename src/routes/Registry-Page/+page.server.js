import { AddUser} from '$lib/server/database'
import { redirect } from "@sveltejs/kit";


/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
      // TODO log the user in
      const data = await event.request.formData()
      const user = await AddUser(data.get('username'), data.get('email'), data.get('pswrd'))
      if(user != '') {
        console.log(user)
        throw redirect(303,'/')
      } 
    }
};

