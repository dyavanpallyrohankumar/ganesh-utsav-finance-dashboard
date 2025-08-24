# 🪔 Roudra Sena Ganesh Utsav Finance Dashboard

<div align="center">
  <img src="./images/logo.jpeg" alt="Ganesh Utsav Logo" width="200" height="200">
  <h3>🎉 Complete Finance Management System for Roudra Sena Ganesh Utsav Celebrations 🎉</h3>
  
  [![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)](https://your-username.github.io/ganesh-utsav-finance-dashboard/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Responsive](https://img.shields.io/badge/Responsive-Yes-blue)](https://your-username.github.io/ganesh-utsav-finance-dashboard/)
</div>

---

## 🌟 Overview

The **Ganesh Utsav Finance Dashboard** is a comprehensive web-based solution designed to manage and track all financial activities during Ganesh festival celebrations. Built with pure HTML, CSS, and JavaScript, this dashboard provides real-time insights into contributions, expenses, and budget status through seamless integration with Google Forms and Google Sheets.

Perfect for community associations, residential societies, and festival organizing committees who need transparent and automated financial tracking without the complexity of traditional accounting software.

---

## ✨ Features

### 🎯 **Core Functionality**
- **📊 Real-time Finance Tracking** - Live updates from Google Sheets
- **💰 Automated Calculations** - Total collected, spent, and current balance
- **👥 Member Contributions** - Track individual member contributions
- **📈 Category-wise Expenses** - Monitor spending across different categories
- **🏆 Expense Analytics** - Identify highest expenses and most expensive categories
- **📅 Daily Summaries** - Track daily financial activities

### 🎨 **User Experience**
- **📱 Responsive Design** - Works perfectly on mobile and desktop
- **⚡ Smooth Animations** - Hover effects and fade-in transitions
- **🪔 Custom Ganesh Logo** - Festival-themed branding
- **🎉 Festive Color Scheme** - Orange, saffron, and traditional colors
- **🔄 Auto-refresh Data** - Live synchronization with Google Sheets

### 🛠️ **Technical Features**
- **🌐 Pure Web Technologies** - HTML5, CSS3, JavaScript (No frameworks)
- **📋 Google Form Integration** - Easy data entry for all members
- **📊 CSV Data Pipeline** - Direct connection to published Google Sheets
- **🚀 GitHub Pages Ready** - One-click deployment
- **🔒 No Backend Required** - Client-side only solution

---

## 🚀 Setup Instructions

### 1️⃣ **Clone Repository**
```bash
git clone https://github.com/dyavanpallyrohankumar/ganesh-utsav-finance-dashboard.git
cd ganesh-utsav-finance-dashboard
```

### 2️⃣ **Add Custom Logo**
- Place your Ganesh festival logo in `/images/logo.jpg`
- Recommended size: 200x200 pixels
- Format: JPG, PNG, or SVG

### 3️⃣ **Connect Google Sheets**

#### Create Google Form:
1. Go to [Google Forms](https://forms.google.com)
2. Create form with these fields:
   - Date (Date picker)
   - Entry Type (Credit/Debit)
   - Amount (Number)
   - Purpose/Category (Dropdown)
   - Description (Text)
   - Person Name (Text)
   - Contact Number (Text)
   - Payment Method (Dropdown)
   - Receipt Number (Text)
   - Form Filler Name (Text)

#### Setup Google Sheets:
1. Link form to Google Sheets
2. Create additional sheets: Transaction Log, Category Summary, Member Contributions, Daily Summary
3. Add the formulas provided in the documentation
4. Publish the final summary sheet as CSV:
   - Go to **File → Share → Publish to web**
   - Choose the summary sheet
   - Select **CSV** format
   - Copy the published URL

#### Update JavaScript:
```javascript
// In script.js, replace the CSV URL
const CSV_URL = 'YOUR_PUBLISHED_GOOGLE_SHEETS_CSV_URL_HERE';
```

### 4️⃣ **Run Locally**
```bash
# Simple HTTP server (Python 3)
python -m http.server 8000

# Or using Node.js
npx http-server

# Or using PHP
php -S localhost:8000
```

Visit `http://localhost:8000` to view the dashboard.

### 5️⃣ **Deploy on GitHub Pages**
1. Push code to GitHub repository
2. Go to repository **Settings → Pages**
3. Select **Source: Deploy from a branch**
4. Choose **main branch**
5. Your dashboard will be live at: `https://your-username.github.io/ganesh-utsav-finance-dashboard/`

---

## 🔄 Data Flow Architecture

```
📋 Google Form (Data Entry)
           ↓
📊 Sheet 1: Form Responses (Raw Data)
           ↓
🔄 Sheet 2: Transaction Log (Processed)
           ↓
📈 Sheet 3: Category Summary (Auto-calculated)
           ↓
👥 Sheet 4: Member Contributions (Auto-updated)
           ↓
📅 Sheet 5: Daily Summary (Auto-generated)
           ↓
🌐 Published CSV (Live Data Feed)
           ↓
💻 Dashboard (Real-time Display)
```

### **Data Processing Pipeline:**
1. **📝 Input**: Members fill Google Form with transaction details
2. **🔧 Processing**: Google Sheets automatically processes and categorizes data
3. **📊 Analysis**: Automatic calculations for balances, summaries, and analytics
4. **🚀 Output**: Live dashboard updates via CSV feed
5. **👀 Display**: Beautiful, responsive web interface shows real-time data

---

## 📁 Project Structure

```
ganesh-utsav-finance-dashboard/
│
├── 📄 index.html              # Main dashboard page
├── 🎨 styles.css              # CSS styling and animations
├── ⚡ script.js               # JavaScript for data fetching and UI
├── 📖 README.md               # Project documentation
│
├── 🖼️ images/
│   └── logo.jpg               # Custom Ganesh festival logo
│
├── 📊 data/
│   └── sample-data.csv        # Sample data for testing
│
└── 📚 docs/
    ├── setup-guide.md         # Detailed setup instructions
    ├── google-sheets-formulas.md  # All Google Sheets formulas
    └── form-structure.md      # Google Form field specifications
```

---

## 🎯 Dashboard Features

### **💰 Financial Metrics**
- **Total Collected**: Real-time sum of all contributions and donations
- **Total Spent**: Current total of all expenses across categories
- **Current Balance**: Live calculation of remaining funds
- **Budget Status**: Visual indicators for budget adherence

### **👥 Member Analytics**
- **Contributors Count**: Number of members who have contributed
- **Individual Contributions**: Detailed breakdown per member
- **Payment Methods**: Track cash, UPI, bank transfers

### **📊 Expense Analysis**
- **Highest Single Expense**: Identify largest transactions
- **Most Expensive Category**: Track which category consumes most budget
- **Category-wise Breakdown**: Visual representation of spending distribution
- **Daily Trends**: Monitor daily financial activities

### **📱 User Interface**
- **Responsive Cards**: Clean, mobile-friendly card layout
- **Color-coded Status**: Green (good), Yellow (warning), Red (over-budget)
- **Smooth Animations**: Hover effects and loading transitions
- **Real-time Updates**: Auto-refresh every 30 seconds

---

## 🎨 Customization

### **🎨 Theming**
```css
/* In styles.css, modify these variables */
:root {
  --primary-color: #FF6B35;      /* Saffron orange */
  --secondary-color: #F7931E;    /* Festival orange */
  --accent-color: #FFD700;       /* Golden yellow */
  --text-color: #333;            /* Dark text */
  --background: #FFF8E7;         /* Light cream */
}
```

### **🖼️ Logo Replacement**
- Replace `/images/logo.jpg` with your custom logo
- Update logo dimensions in CSS if needed
- Supported formats: JPG, PNG, SVG

### **📊 Data Categories**
Modify categories in Google Form and corresponding sheets:
- Idol Purchase
- Decoration
- Food & Prasad
- Sound System
- Venue Setup
- Transportation
- Photography
- Utilities
- Marketing
- Miscellaneous

---

## 🧪 Demo Features

### **📱 Try It Out:**
1. **View Live Dashboard**: See real-time financial data
2. **Fill Sample Form**: Test the Google Form integration
3. **Mobile Responsive**: Check on different devices
4. **Data Refresh**: Watch automatic updates
5. **Category Filtering**: Explore expense breakdowns

### **🎯 Sample Data Included:**
- Member contributions: ₹25,000+
- Multiple expense categories
- Various payment methods
- Daily transaction history
- Budget tracking examples

---

## 🛠️ Technologies Used

### **Frontend:**
- **HTML5** - Semantic structure
- **CSS3** - Styling, animations, responsive design
- **JavaScript (ES6+)** - Data fetching, DOM manipulation
- **CSV Parser** - For Google Sheets integration

### **Backend/Data:**
- **Google Forms** - Data collection
- **Google Sheets** - Data processing and storage
- **Google Apps Script** - Automated calculations

### **Deployment:**
- **GitHub Pages** - Free hosting
- **Git** - Version control

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌟 Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **💫 Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **🚀 Push** to the branch (`git push origin feature/AmazingFeature`)
5. **📋 Open** a Pull Request

### **Ideas for Contribution:**
- 📊 Additional chart visualizations
- 🌐 Multi-language support
- 📱 PWA (Progressive Web App) features
- 🎨 More themes and customization options
- 📧 Email notifications for budget alerts

---

## 📞 Support & Community

### **🐛 Issues & Bugs**
- Report issues on [GitHub Issues](https://github.com/dyavanpallyrohankumar/ganesh-utsav-finance-dashboard/issues)
- Include screenshots and error details

### **💬 Discussions**
- Feature requests: [GitHub Discussions](https://github.com/dyavanpallyrohankumar/ganesh-utsav-finance-dashboard/discussions)
- Community support: [GitHub Discussions](https://github.com/dyavanpallyrohankumar/ganesh-utsav-finance-dashboard/discussions)

### **📖 Documentation**
- Detailed setup guide: [`/docs/setup-guide.md`](./docs/setup-guide.md)
- Google Sheets formulas: [`/docs/google-sheets-formulas.md`](./docs/google-sheets-formulas.md)
- Form structure: [`/docs/form-structure.md`](./docs/form-structure.md)

---

## 🙏 Credits

### **🎉 Created By:**
**Roudra Sena Youth Association** - Ganesh Utsav Organizing Committee

### **🛠️ Built With:**
- ❤️ **Love** for Lord Ganesha
- 💪 **Community Spirit** 
- 🧠 **Open Source Technologies**

### **🌟 Special Thanks:**
- **Google** - For free Forms and Sheets platform
- **GitHub** - For free hosting via GitHub Pages
- **Community Contributors** - For testing and feedback
- **Festival Organizers** - For requirements and validation

### **🎨 Design Inspiration:**
- Traditional Ganesh festival colors
- Modern web design principles
- Mobile-first responsive approach
- Accessibility guidelines (WCAG 2.1)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **✅ You Can:**
- ✅ Use commercially
- ✅ Modify and distribute
- ✅ Use privately
- ✅ Sublicense

### **📋 You Must:**
- 📋 Include license and copyright notice
- 📋 State changes made to the code

### **❌ Limitations:**
- ❌ No warranty provided
- ❌ No liability accepted

---

## 🎊 Final Note

> **"Ganpati Bappa Morya! May this dashboard bring transparency, efficiency, and joy to your Ganesh Utsav celebrations. Built with devotion for the community, by the community."** 🙏

---

<div align="center">
  <h3>🌟 If this project helped your association, please give it a ⭐ star! 🌟</h3>
  <p>Made with ❤️ for Ganesh Utsav celebrations everywhere</p>
  
  **🔗 [Live Demo](https://ganesh-utsav-finance-dashboard.vercel.app/) | 📊 [Google Form](https://forms.gle/QeyMFgjcJASSpsJ27) | 📋 [Documentation](./docs/)**

<iframe src="https://ganesh-utsav-finance-dashboard.vercel.app/" height="600" width="100%" frameborder="0"></iframe>
</div>