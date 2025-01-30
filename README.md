# Currency Converter

## 🚀 Overview
The **Currency Converter** is a React-based web application that allows users to convert amounts between different currencies using real-time exchange rates.

## 📌 Features
- Convert between multiple currencies.
- Swap currency selections instantly.
- Fetch real-time exchange rates using an API.
- Responsive and user-friendly UI.
- Clear button to reset inputs.

## 🏗️ Tech Stack
- **React** (Hooks: `useState`, `useEffect`)
- **CSS / Tailwind** for styling
- **Fetch API** for currency data

## 📂 Project Structure
```
/currency-converter
 ├── /src
 │   ├── /components    # UI Components (e.g., InputBox)
 │   ├── /hooks         # Custom Hooks (e.g., useCurrencyInfo)
 │   ├── App.js         # Main application
 │   ├── index.js       # Entry point
 ├── /public
 │   ├── images         # Static images
 ├── package.json       # Dependencies & scripts
 ├── README.md          # Project documentation
```

## ⚙️ Installation
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/currency-converter.git
cd currency-converter
npm install
npm start
```

## 🌍 API Usage
This project fetches real-time exchange rates from:
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

## 📸 Screenshots
![Currency Converter UI](https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/currency-converter/main/public/images/screenshot.png)

## 🛠️ Available Scripts
- `npm start` – Runs the app in development mode.
- `npm build` – Builds the app for production.

## 💡 Future Enhancements
- Dark mode support
- Historical exchange rate tracking
- Multi-language support

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License
This project is open-source under the MIT License.

---
Made with ❤️ by **Ashvini Sharma**