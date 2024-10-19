import { SvelteKitAuth } from "@auth/sveltekit"
import TikTok from "@auth/sveltekit/providers/tiktok"
 
export const { handle, signIn } = SvelteKitAuth({
  providers: [TikTok],
}) 