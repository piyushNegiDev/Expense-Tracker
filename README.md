# 💸 Expense Tracker

A simple and intuitive web application to track and manage your daily expenses with real-time filtering and local storage persistence.

## 🌟 Features

- **Add Expenses**: Record expenses with title, amount, category, and date
- **Category Management**: Organize expenses into predefined categories (Food, Travel, Shopping, Bills)
- **Real-time Total Calculation**: Automatically calculates and displays total expenses
- **Filter by Category**: View expenses by specific categories or all at once
- **Filter by Month**: Filter expenses by selecting a specific month
- **Local Storage**: All data is saved locally in your browser for persistence
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Delete Functionality**: Remove unwanted expense entries

## 🚀 Demo

The application displays:

- A total expense counter at the top
- An input form to add new expenses
- A filterable list of all recorded expenses
- Category and month-based filtering options

## 📋 Prerequisites

No special prerequisites needed! Just a modern web browser that supports:

- HTML5
- CSS3
- JavaScript ES6+
- Local Storage API

## 🛠️ Installation

1. Clone or download this repository
2. Ensure all files are in the correct structure:

```
project-folder/
│
├── index.html
├── style.css
└── scripts/
    ├── utils.js
    ├── script.js
    ├── eventHandlers.js
    └── uiHandling.js
```

3. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## 💻 Usage

### Adding an Expense

1. Enter the expense title in the "Expense title" field
2. Enter the amount in the "Amount" field
3. Select a category from the dropdown (Food, Travel, Shopping, or Bills)
4. Choose the date of the expense
5. Click the "Add Expense" button

### Filtering Expenses

- **By Category**: Use the category dropdown to filter by specific expense types
- **By Month**: Select a month from the month picker to view expenses from that period
- Both filters can be used simultaneously for more precise filtering

### Deleting an Expense

Click the ❌ button next to any expense entry to remove it from the list.

## 📁 Project Structure

### HTML (`index.html`)

- Main structure with two primary sections: input form and expense display
- Includes form inputs for expense details
- Contains filter controls for category and date

### CSS (`style.css`)

- Modern, clean design with gradient accents
- Responsive layout that adapts to different screen sizes
- Smooth scrolling for expense list
- Purple gradient theme (#667eea, #764ba2)

### JavaScript Files

#### `script.js`

- Core expense management functionality
- `getExpense()`: Captures and adds new expenses
- Data validation and expense object creation
- Initial data loading from local storage

#### `eventHandlers.js`

- Event listener setup for user interactions
- Add expense button click handler
- Delete expense click handler
- Filter change handlers

#### `uiHandling.js`

- UI rendering and display logic
- `renderExpensesList()`: Renders expense items to the DOM
- `calculateTotalExpense()`: Updates total expense display
- `checkEmptyList()`: Handles empty state messaging
- `clearInputs()`: Resets form inputs after submission

#### `utils.js`

- Helper functions
- `saveToLocalStorage()`: Persists data to browser storage
- `getFromLocalStorage()`: Retrieves saved data
- `getFilteredExpenses()`: Filters expenses based on selected criteria
- `formatDate()`: Date formatting utility
- `convertMonthArray()`: Converts date to readable format
- `removeExpenseFromList()`: Removes expense by ID

## 🎨 Color Scheme

- Primary Gradient: `#667eea` to `#764ba2`
- Background: `#f4f6f8`
- Card Background: `#fff`
- Expense Item Background: `#eceeef`

## 📱 Responsive Design

The application is fully responsive with breakpoints at:

- Mobile: `max-width: 782px`
- Small screens: `max-height: 500px`

Layout adjusts from horizontal to vertical alignment on smaller screens.

## 💾 Data Storage

All expense data is stored in the browser's Local Storage, which means:

- Data persists across browser sessions
- No server or database required
- Data is stored locally on your device
- Clearing browser data will remove saved expenses

## 🔧 Customization

### Adding New Categories

To add new expense categories, edit the `<select>` elements in `index.html`:

```html
<option value="YourCategory">Your Category</option>
```

Add the same option to both the input category dropdown and the filter dropdown.

### Changing Colors

Modify the gradient colors in `style.css`:

```css
.totalExpense {
  background: linear-gradient(135deg, #yourColor1, #yourColor2);
}
```

## 🐛 Known Limitations

- Data is stored locally only (not synced across devices)
- No export/import functionality
- Limited to predefined categories
- No data backup feature

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

- This project is open source and available for personal and commercial use.
- Created as a practical expense tracking solution for personal finance management.

## 👨‍💻 Author

**Piyush Negi** - Frontend Developer 🚀

**Happy Expense Tracking! 💰**

---
