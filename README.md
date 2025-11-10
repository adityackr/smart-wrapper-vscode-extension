# **Smart Wrapper — VS Code Extension**

A powerful, developer-friendly extension that lets you wrap any HTML or JSX code snippet instantly — without cutting, pasting, or fixing broken indentation.

Smart Wrapper streamlines common UI-development workflows, especially in React, Next.js, HTML, and component-heavy projects.

---

## ✨ **Features**

### ✅ **Quick Tag Selection**

Choose your wrapper tag using a clean Quick Pick menu:

- `div`, `span`, `section`, `article`, `main`, `nav`, `header`, `footer`
- Or enter **any custom tag** (e.g., `MyComponent`, `wrapper-box`, etc.)

### ✅ **Correct Indentation**

Automatically detects your line's indentation and formats the wrapped content cleanly — whether it's single-line or multi-line.

### ✅ **Smart Multi-Line Handling**

Multi-line selections are wrapped with consistent indentation:

```html
<div>
	<p>Hello</p>
	<span>World</span>
</div>
```

### ✅ **Self-Closing Tag Detection**

If you wrap something like:

```html
<img src="/banner.jpg" />
```

Smart Wrapper formats it gracefully.

### ✅ **Full TypeScript Codebase**

Clean, typed code for easy maintenance and contribution.

### ✅ **Ready to Package**

Includes required scripts and output structure to generate a `.vsix` file using `vsce`.

---

## 🚀 **Usage**

1. Select any HTML/JSX code.
2. Open the Command Palette:

   ```
   Smart Wrap Selection
   ```

3. Pick your wrapper tag (or enter your own).
4. Done ✅ — your selected code is wrapped and properly formatted.

---

## 🎯 **Example**

### Before

```jsx
<p>Hello World</p>
```

### After

(using wrapper tag: **div**)

```jsx
<div>
	<p>Hello World</p>
</div>
```

---

## 📌 **Commands**

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `smartWrapper.wrap` | Wrap selected text with any HTML/JSX tag |

---

## 🔮 **Upcoming Enhancements (Optional)**

These can be added if you want extended functionality:

- Auto-detect wrapper from clipboard
- Surround-With context menu option
- Wrap each selected line separately
- JSX-aware parsing using Babel
- Attribute support in wrapper tag (`<div class=\"box\">`)

Let me know if you'd like me to implement any of these.

---

## ❤️ **Contributing**

Pull requests and feature suggestions are welcome!

---
