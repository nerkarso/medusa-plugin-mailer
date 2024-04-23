import { MedusaError } from 'medusa-core-utils';
import { minLength, object, safeParse, string } from 'valibot';

export default async (req, res) => {
  const schema = object({
    template_id: string([minLength(1)]),
    from: string([minLength(1)]),
    to: string([minLength(1)]),
    data: object({}),
  });

  const result = safeParse(schema, req.body);
  if (!result.success) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, JSON.stringify(result.issues));
  }

  const value = req.body;
  try {
    const smtpService = req.scope.resolve('smtpService');
    await smtpService.sendEmail(value.template_id, value.from, value.to, value.data);
    res.sendStatus(200);
  } catch (err) {
    throw err;
  }
};
