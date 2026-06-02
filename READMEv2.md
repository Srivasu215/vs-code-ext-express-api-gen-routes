# vs-code-ext-express-api-gen-routes 🚀

AI-powered route management extension for Visual Studio Code.

Quickly create Express sub-routes and automatically fix missing route code directly from the VS Code Title Bar and Explorer context menu.

---

# ✨ Overview

**vs-code-ext-express-api-gen-routes** is a Visual Studio Code extension developed by **KeshavSoft** for improving Express.js route management and reducing manual backend maintenance.

This extension focuses on two important developer tasks:

* Creating modular sub-routes automatically
* Fixing incomplete or broken route files instantly

---

# 🎯 Main Features

## ➕ addSubRoute

Automatically creates and registers sub-route structures for Express applications.

The extension generates:

* Route files
* Router configuration
* Route registration
* Modular API structure

### Example

```js id="c3m7e0"
router.use("/users", usersRouter);
```

---

## 🛠️ fix

The **fix** command automatically detects and regenerates missing or incomplete route code inside selected files.

### Example Problems Fixed

Missing export:

```js id="ecf7r1"
export { router };
```

Missing router initialization:

```js id="w7lfc2"
const router = express.Router();
```

Missing imports:

```js id="m1f8d9"
import express from "express";
```

The extension automatically regenerates required code sections and fixes structure issues.

---

# ⚡ Features

✅ Create Express sub-routes instantly
✅ Auto-fix broken or incomplete route files
✅ Reduce repetitive backend coding
✅ Modular Express architecture support
✅ VS Code Explorer integration
✅ Faster Node.js API development
✅ Beginner-friendly workflow

---

# 🖼️ Workflow

## addSubRoute

1. Right-click a folder or file
2. Select:

```bash id="5j4px2"
addSubRoute
```

3. Enter sub-route name
4. Extension generates route structure automatically

---

## fix

1. Open broken route file
2. Click:

```bash id="rq3v6m"
fix
```

3. Extension scans the file
4. Missing code is regenerated automatically

---

# 📁 Folder Structure

```bash id="y6w4ha"
vs-code-ext-express-api-gen-routes
│
├── .vscode
├── archive
├── Docs
├── node_modules
├── src
├── test
│
├── extension.js
├── package.json
├── README.md
└── CHANGELOG.md
```

---

# 🛠️ Commands

| Command       | Description                                |
| ------------- | ------------------------------------------ |
| `addSubRoute` | Creates modular Express sub-routes         |
| `fix`         | Detects and regenerates missing route code |

---

# 🚀 Why Use This Extension?

* Save backend development time
* Quickly repair broken route files
* Maintain clean Express architecture
* Improve productivity inside VS Code
* Avoid repetitive manual fixes

---

# 🧠 Built With

* Node.js
* Express.js
* JavaScript
* VS Code Extension API

---

# 📄 License

MIT License

---

# 👨‍💻 Author

Developed by **KeshavSoft**

---

# ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork the project
* 🚀 Share with developers
