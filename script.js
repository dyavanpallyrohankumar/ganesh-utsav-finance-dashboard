
const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSiX45lgLMx8wcaiyyrDcKzjd8HdDAt8c6cP1Zys3yD8Ia8qmYTOlysjJ5y25ZR4ayfi67wKjg20A5n/pub?gid=1889437674&single=true&output=csv";

// Function to format numbers with Indian numbering system
function formatIndianCurrency(amount) {
    if (isNaN(amount) || amount === '') return '₹0';
    const num = parseFloat(amount);
    return '₹' + num.toLocaleString('en-IN');
}

// Function to animate number counting
function animateNumber(element, finalValue, duration = 1000) {
    const startValue = 0;
    const startTime = performance.now();
    const isCurrency = element.id.includes('total') || element.id.includes('balance') || element.id.includes('Expense');

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentValue = Math.floor(startValue + (finalValue - startValue) * progress);

        if (isCurrency) {
            element.textContent = formatIndianCurrency(currentValue);
        } else {
            element.textContent = currentValue.toLocaleString();
        }

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

async function loadData() {
    try {
        // Show loading state
        const refreshBtn = document.querySelector('.refresh-btn i');
        refreshBtn.style.animation = 'spin 1s linear infinite';

        const response = await fetch(sheetURL);
        const data = await response.text();
        const rows = data.split("\n").map(r => r.split(","));

        function getValue(label) {
            const row = rows.find(r => r[0] && r[0].trim() === label);
            return row ? row[1]?.trim().replace(/["₹]/g, '') : "0";
        }

        // Get values
        const totalCollected = getValue("TOTAL COLLECTED:") || "0";
        const totalSpent = getValue("TOTAL SPENT:") || "0";
        const balance = getValue("CURRENT BALANCE:") || "0";
        const members = getValue("TOTAL MEMBERS CONTRIBUTED:") || "0";
        const highestExpense = getValue("HIGHEST SINGLE EXPENSE:") || "0";
        const expCategory = getValue("MOST EXPENSIVE CATEGORY:") || "Not Available";
        const overBudget = getValue("Categories Over Budget:") || "0";
        const withinBudget = getValue("Categories Within Budget:") || "0";

        // Animate numbers
        animateNumber(document.getElementById("totalCollected"), parseFloat(totalCollected));
        animateNumber(document.getElementById("totalSpent"), parseFloat(totalSpent));
        animateNumber(document.getElementById("balance"), parseFloat(balance));
        animateNumber(document.getElementById("members"), parseInt(members));
        animateNumber(document.getElementById("highestExpense"), parseFloat(highestExpense));
        animateNumber(document.getElementById("overBudget"), parseInt(overBudget));
        animateNumber(document.getElementById("withinBudget"), parseInt(withinBudget));

        // Update header stats
        animateNumber(document.getElementById("quickBalance"), parseFloat(balance));
        animateNumber(document.getElementById("quickMembers"), parseInt(members));
        document.getElementById("quickTransactions").textContent = Math.max(parseInt(members) * 2, 10); // Estimated

        // Update category (non-numeric)
        document.getElementById("expCategory").textContent = expCategory;

        // Update balance color based on value
        const balanceElement = document.getElementById("balance");
        const balanceValue = parseFloat(balance);
        if (balanceValue > 0) {
            balanceElement.className = "card-value status-good";
        } else if (balanceValue === 0) {
            balanceElement.className = "card-value status-warning";
        } else {
            balanceElement.className = "card-value status-danger";
        }

          // ✅ Transactions (find the "LAST 5 TRANSACTIONS:" row and parse below it)
        const txStartIndex = rows.findIndex(r => r[0] && r[0].includes("LAST 5 TRANSACTIONS:"));
        let transactions = [];

        if (txStartIndex !== -1) {
            for (let i = txStartIndex + 1; i < rows.length; i++) {
                if (!rows[i][0]) break; // stop at empty row
                const [date, description, amount, category] = rows[i];
                if (date && description && amount) {
                    transactions.push({ date, description, amount, category });
                }
            }
        }

        // ✅ Render transactions
        const tbody = document.getElementById("transactionTable");
        if (transactions.length > 0) {
            tbody.innerHTML = transactions.map(trans => `
                <tr>
                  <td><i class="fas fa-calendar-day" style="margin-right: 0.5rem; color: var(--primary-orange);"></i>${trans.date}</td>
                  <td>${trans.description}</td>
                  <td><strong>₹${trans.amount}</strong></td>
                  <td>
                    <span style="background: var(--shadow-light); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">
                      ${trans.category || "General"}
                    </span>
                  </td>
                </tr>
            `).join('');
        } else {
            tbody.innerHTML = `
              <tr>
                <td colspan="4" style="text-align: center; padding: 2rem; color: var(--text-light);">
                  No transactions found
                </td>
              </tr>
            `;
        }

        // Stop loading animation
        setTimeout(() => {
            refreshBtn.style.animation = '';
        }, 1000);

    } catch (error) {
        console.error('Error loading data:', error);

        // Show error state
        document.getElementById("transactionTable").innerHTML = `
          <tr>
            <td colspan="4" style="text-align: center; padding: 2rem; color: var(--text-light);">
              <i class="fas fa-exclamation-triangle" style="color: #e74c3c; margin-right: 0.5rem;"></i>
              Unable to load data. Please try again Later or Check your Mail.
            </td>
          </tr>
        `;

        // Stop loading animation
        document.querySelector('.refresh-btn i').style.animation = '';
    }
}

// Load data on page load
document.addEventListener('DOMContentLoaded', function () {
    // Add delay to see loading animation
    setTimeout(loadData, 500);

    // Auto-refresh every 5 minutes
    setInterval(loadData, 5 * 60 * 1000);
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';
