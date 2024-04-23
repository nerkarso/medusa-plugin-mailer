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
    emailTemplatePath: 'data/templates',
    templateMap: {
      'order.placed': 'order_placed',
    },
  },
}
```

- `transport` - This is a Nodemailer transport options object, see [docs](https://nodemailer.com/smtp/#1-single-connection).
- `emailTemplatePath` — The location of your email templates. It can be a full (absolute) path or a path relative to the Medusa root folder.
- `templateMap` — This maps the folder/template name to a Medusa event to use the right template. Only the events that are registered here are subscribed to.

## Templates

It uses the [email-templates](https://github.com/forwardemail/email-templates) package for rendering HTML emails.

```
medusa-server
└── data
    └── templates
        ├── html.html     // Required
        ├── subject.html  // Optional
        └── text.html     // Optional
```

## Acknowledgement

Part of the source code is borrowed from [nc-medusa-plugin-smtp](https://github.com/noel-chinaza/nc-medusa-plugin-smtp) and [medusa-plugin-resend](https://github.com/pevey/medusa-plugin-resend).
