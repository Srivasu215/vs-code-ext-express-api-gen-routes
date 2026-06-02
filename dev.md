# Developer Guide — vs-code-ext-express-api-gen-routes 🚀

## Overview

`vs-code-ext-express-api-gen-routes` is a Visual Studio Code extension for managing Express.js modular route structures and fixing incomplete route files automatically.

The extension focuses on:

* Sub-route generation
* Route registration
* Express.js structure fixing
* Backend productivity improvements

---

# 🎯 Main Developer Features

The extension currently supports:

✅ addSubRoute
✅ fix route structure
✅ Router registration
✅ Missing code regeneration
✅ Express modular architecture

---

# ➕ addSubRoute Workflow

The `addSubRoute` action automatically:

* Creates modular route structure
* Imports router
* Registers sub-route
* Updates `routes.js`

---

## Example Generated Route

```js id="t3v7mp"
router.use("/users", usersRouter);
```

---

# 🛠️ fix Workflow

The `fix` command scans selected files and repairs incomplete Express.js code.

---

# Supported Fixes

## Missing Import

```js id="x4m9wa"
import express from "express";
```

---

## Missing Router

```js id="q7n2ys"
const router = express.Router();
```

---

## Missing Export

```js id="z8p5kr"
export { router };
```

---

# 🛠️ Development Workflow

---

# Step 1 — Run Extension

Launch Extension Development Host:

| Shortcut | Purpose         |
| -------- | --------------- |
| `F5`     | Start extension |

---

# Step 2 — Open Workspace

Open Express.js project inside VS Code.

---

# Step 3 — Use Explorer Context Menu

Right-click route file or folder.

Commands:

```bash id="h3x7mc"
addSubRoute
```

or

```bash id="v9r2qa"
fix
```

---

# Step 4 — Route Processing

The extension automatically:

* Updates routes
* Fixes broken structure
* Registers routers
* Repairs missing code

---

# 📁 Project Structure

```bash id="d8n4yk"
vs-code-ext-express-api-gen-routes
│
├── .vscode
├── archive
├── Docs
├── src
├── test
│
├── extension.js
├── package.json
├── README.md
├── dev.md
└── CHANGELOG.md
```

---

# 📄 Important Files

| File           | Purpose                |
| -------------- | ---------------------- |
| `extension.js` | Extension entry point  |
| `routes.js`    | Route registration     |
| `package.json` | VS Code command config |
| `README.md`    | User documentation     |
| `dev.md`       | Developer guide        |

---

# ⚡ Developer Shortcuts

| Shortcut           | Purpose              |
| ------------------ | -------------------- |
| `F5`               | Run extension        |
| `Ctrl + Shift + P` | Open command palette |
| `Ctrl + R`         | Reload VS Code       |
| `Ctrl + ``         | Open terminal        |

---

# 🧠 Developer Notes

* Prevent duplicate router registration
* Validate existing imports
* Preserve developer-written code
* Keep route generation modular
* Maintain Express.js conventions

---

# 🧪 Testing Workflow

## Install Dependencies

```bash id="r4t8zm"
npm install
```

---

## Run Extension

```bash id="w6x1qa"
F5
```

---

## Validate Generated Output

Check:

* `routes.js`
* Router imports
* Route registration
* Duplicate prevention
* Fix command behavior

---

# 🚀 Future Improvements

Planned features:

* Nested route generation
* Middleware injection
* Dynamic route templates
* AI-assisted fixing
* Route validation
* TypeScript support

---

# 🧠 Technologies Used

* Node.js
* Express.js
* JavaScript
* VS Code Extension API

---

# 👨‍💻 Maintainer

Developed by **KeshavSoft**
