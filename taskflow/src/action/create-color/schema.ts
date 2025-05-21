
import { z } from "zod";

export const CreateColorSchema = z.object({

  boardId: z.string(),
  title: z
    .string({
      required_error: "Title is required.",
      invalid_type_error: "Title is required.",
    })
    .min(3, { message: "Title is too short" }),
  color: z.string(),
  id_card: z.number(),

});