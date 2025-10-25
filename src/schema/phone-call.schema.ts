import { z } from "zod";

export const PhoneCallSchema = z.object({
  name: z
    .string()
    .min(3, "минимум 3 символа")
    .max(30, "максимум 30 символов")
    .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, "допустимы только буквы"),

  phone: z
    .string()
    .min(5, "введите номер")
    .regex(/^\+?\d{5,15}$/, "неверный формат"),

  theme: z.string().min(2, "укажите тему"),
  comment: z.string().optional(),
  agreeData: z.boolean(),
});

export type IPhoneCallForm = z.infer<typeof PhoneCallSchema>;
