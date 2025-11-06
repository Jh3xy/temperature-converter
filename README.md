# 🌡️ Temperature Converter

[![Live Demo](https://img.shields.io/badge/🌐_View_Live_Project-0A66C2?style=for-the-badge)](https://jh3xy.github.io/temperature-converter/)

A clean, minimal temperature converter built with **HTML, CSS, and JavaScript**.  
This project converts between **Celsius (°C)** and **Fahrenheit (°F)** with an intuitive, card-style interface.

---

## ✨ Features

- 🔁 **Celsius ↔ Fahrenheit Toggle** — Instantly switch between units.  
- 💡 **Real-Time Conversion** — Converts input values on button click.  
- ⚠️ **Error Animation** — Subtle shake animation when no value is entered.  
- 🎨 **Modern UI** — Built using a custom color palette and the Quicksand font.  
- 📱 **Responsive Layout** — Works seamlessly across screen sizes.

---

## 🎨 Color Palette

| Role | Color | HSL |
|------|--------|------|
| White | `--clr-white` | hsl(0, 0%, 100%) |
| Grey 500 | `--clr-grey-500` | hsl(186, 15%, 59%) |
| Grey 900 | `--clr-grey-900` | hsl(187, 24%, 22%) |
| Green 200 | `--clr-green-200` | hsl(148, 38%, 91%) |
| Green 600 | `--clr-green-600` | hsl(169, 82%, 27%) |
| Red | `--clr-red` | hsl(0, 66%, 54%) |

---

## 🧠 Logic Overview

The app runs on a simple state-based toggle system:

1. User enters a temperature value.  
2. On button click, the script checks the current mode (°C or °F).  
3. The correct conversion formula is applied:
   - °C → °F: `(C * 9/5) + 32`
   - °F → °C: `(F - 32) * 5/9`  
4. When switching modes, the input and result clear automatically.  
5. If no input is given, a shake animation signals an error.

---

## 🛠️ Built With

- **HTML5**  
- **CSS3** (custom variables + transitions)  
- **JavaScript (ES6)**  

Font: [Quicksand](https://fonts.google.com/specimen/Quicksand)

---

## 🚀 How to Use

1. Enter a temperature value in the input field.  
2. Use the toggle to switch between °C and °F.  
3. Click **Convert** to view the result.  

---

## 📸 Preview

🔗 **Live Demo:** [jh3xy.github.io/temperature-converter](https://jh3xy.github.io/temperature-converter/)

---

## 💬 About

Designed and built by **Jhey** — focused on clean UI, smooth UX, and intuitive JavaScript logic.  

---

