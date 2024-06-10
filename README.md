# medusa-plugin-mailer

A notification service to send transactional emails with Nodemailer.

## Usage

```js
{
  resolve: 'medusa-plugin-mailer',
  options: {
    fromEmail: process.env.EMAIL_FROM,
    transport: {
      host: process.env.EMAIL_SMTP_HOST,
      port: process.env.EMAIL_SMTP_PORT,
      secure: JSON.parse(process.env.EMAIL_SMTP_SECURE),
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASSWORD,
      },
    },
  },
}
```

- `transport` - This is a Nodemailer transport options object, see [docs](https://nodemailer.com/smtp/#1-single-connection).

## Acknowledgement

Part of the source code is borrowed from:
- [nc-medusa-plugin-smtp](https://github.com/noel-chinaza/nc-medusa-plugin-smtp)
- [medusa-plugin-resend](https://github.com/pevey/medusa-plugin-resend)
