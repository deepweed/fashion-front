import { z } from "zod";

export const OrderSchema = z.object({
  name: z
    .string()
    .min(3, "минимум 3 символа")
    .max(30, "максимум 30 символов")
    .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, "допустимы только буквы"),

  phone: z
    .string()
    .min(5, "введите номер")
    .regex(/^\+?\d{5,15}$/, "неверный формат"),

  city: z.string().min(2, "укажите город"),

  agreeInstallation: z.boolean(),
  agreeData: z.boolean(),
});

export type IOrderCreateForm = z.infer<typeof OrderSchema>;
