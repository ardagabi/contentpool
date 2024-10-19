import type { LayoutServerLoad } from "./$types"
 
export const load: LayoutServerLoad = async (event: any) => {
  const session = await event.locals.auth()
 
  return {
    session,
  }
}