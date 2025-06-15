import { z } from "zod";

const AmountSchema = z.union([
    z.string(),
    z.object({
        debitKey: z.string(),
        creditKey: z.string()
    })
]);

export const BankConfigSchema = z.object({
    name: z.string().nonempty(),
    transactionDateKey: z.string(),
    postDateKey: z.string(),
    descriptionKey: z.string(),
    categoryKey: z.string(),
    amountKey: AmountSchema,
    typeKey: z.string()
});

export type BankConfig = z.infer<typeof BankConfigSchema>;