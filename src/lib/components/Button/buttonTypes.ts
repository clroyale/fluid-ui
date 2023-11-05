import { z } from "zod";

export const ButtonProps = z.object({ buttonType: z.enum(["button", "submit", "reset"]) });

export type ButtonProps = z.infer<typeof ButtonProps>;