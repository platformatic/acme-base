# @platformatic/acme-base

This is foundation piece for all Acme development.
All microservices developed in Acme use this tool.

## Install

```bash
npm install platformatic @platformatic/acme-base
```

## Usage

Create a file `platformatic.json` in your root folder:

```json
{
  "$schema": "https://raw.githubusercontent.com/platformatic/acme-base/main/schemas/1.json",
  "module": "../index.js",
  "server": {
    "hostname": "{{HOSTNAME}}",
    "port": "{{PORT}}"
  },
  "dynamite": true,
  "watch": "{{WATCH}}"
}
```

`HOSTNAME`, `PORT` and `WATCH` are environment variables that are automatically loaded from a `.env` file
in the folder, like so:

```
WATCH=true
HOSTNAME=127.0.0.1
PORT=8080
```

Utilities should be placed inside the `plugins/` folder, while [routes](https://fastify.dev/docs/latest/Reference/Routes/#routes) should be defined in `routes/` .
Both should be defined as Fastify [plugins](https://fastify.dev/docs/latest/Reference/Plugins).


## License

Apache-2.0
