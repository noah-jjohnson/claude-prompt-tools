# Prompt Master + Grammar Master

A Claude Code mod that adds two one-click buttons just above the prompt box:

- **✨ Prompt Master**: rewrites your rough draft prompt into a clear, specific one. It keeps everything you said, invents no new requirements, and keeps short requests short.
- **✏️ Grammar Master**: fixes spelling, grammar and punctuation only. It keeps your wording, meaning and line breaks, and leaves code, paths and links alone.

The result replaces your draft in the prompt box. Nothing is sent until you press Enter.

On surfaces without the button strip (such as mobile), use the slash commands instead:

- `/prompt-master <rough prompt>`
- `/grammar-master <your text>`

Each click makes one small extra Claude request (Sonnet for Prompt Master, Haiku for Grammar Master), billed like any other use.

## Install

At the prompt of a Claude Code terminal session:

```
/plugin install prompt-master --marketplace noah-jjohnson/claude-prompt-tools
```

Answer `y` to add the marketplace, then pick the **user** scope so it loads in every session.

From a shell:

```bash
claude plugin install prompt-master --marketplace noah-jjohnson/claude-prompt-tools
```

In the Claude desktop app, where `/plugin` does not run: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `noah-jjohnson/claude-prompt-tools`, then **Add plugin**.
