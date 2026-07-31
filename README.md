# @iveri/prettier-config

The fleet Prettier settings, in one place.

```bash
pnpm add -D @iveri/prettier-config prettier
```

Reference it from `package.json` — no `.prettierrc` file needed:

```json
{
    "prettier": "@iveri/prettier-config"
}
```

To extend it (rare — prefer not to), use a `.prettierrc.mjs`:

```js
import base from '@iveri/prettier-config' with { type: 'json' };

export default { ...base, plugins: ['prettier-plugin-tailwindcss'] };
```

## Settings

`tabWidth: 4`, `singleQuote`, `trailingComma: "all"`, `printWidth: 120`, `semi`. JSON and YAML
drop to `tabWidth: 2`, which is what every tool that writes those files emits anyway.

Markdown deliberately stays at 4. Prettier formats fenced code blocks with the Markdown file's
own `tabWidth`, so a 2-space override would reformat every TypeScript sample in every README
to an indent the codebase does not use — documentation contradicting the rule it documents.

These five are fixed fleet-wide and asserted by this package's test — changing one reformats
every repo.
