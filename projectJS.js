function generateMealPlan() {
    // Validate email 
    var email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Get user input
    var name = document.getElementById("name").value;
    var goal = document.getElementById("goal").value;
    
    // Create HTML content
    var mealPlanContent = `
        <html>
        <head>
            <title>Meal Plan for ${name}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1>Weekly Meal Plan for ${name}</h1>
            <p><strong>Goal for the Week:</strong> ${goal}</p>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Breakfast</th>
                        <th>Snack 1</th>
                        <th>Lunch</th>
                        <th>Snack 2</th>
                        <th>Dinner</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>Monday</td>
                        <td>${document.getElementById("breakfast_monday").value}</td>
                        <td>${document.getElementById("snack1_monday").value}</td>
                        <td>${document.getElementById("lunch_monday").value}</td>
                        <td>${document.getElementById("snack2_monday").value}</td>
                        <td>${document.getElementById("dinner_monday").value}</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>${document.getElementById("breakfast_tuesday").value}</td>
                        <td>${document.getElementById("snack1_tuesday").value}</td>
                        <td>${document.getElementById("lunch_tuesday").value}</td>
                        <td>${document.getElementById("snack2_tuesday").value}</td>
                        <td>${document.getElementById("dinner_tuesday").value}</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>${document.getElementById("breakfast_wednesday").value}</td>
                        <td>${document.getElementById("snack1_wednesday").value}</td>
                        <td>${document.getElementById("lunch_wednesday").value}</td>
                        <td>${document.getElementById("snack2_wednesday").value}</td>
                        <td>${document.getElementById("dinner_wednesday").value}</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>${document.getElementById("breakfast_thursday").value}</td>
                        <td>${document.getElementById("snack1_thursday").value}</td>
                        <td>${document.getElementById("lunch_thursday").value}</td>
                        <td>${document.getElementById("snack2_thursday").value}</td>
                        <td>${document.getElementById("dinner_thursday").value}</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>${document.getElementById("breakfast_friday").value}</td>
                        <td>${document.getElementById("snack1_friday").value}</td>
                        <td>${document.getElementById("lunch_friday").value}</td>
                        <td>${document.getElementById("snack2_friday").value}</td>
                        <td>${document.getElementById("dinner_friday").value}</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>${document.getElementById("breakfast_saturday").value}</td>
                        <td>${document.getElementById("snack1_saturday").value}</td>
                        <td>${document.getElementById("lunch_saturday").value}</td>
                        <td>${document.getElementById("snack2_saturday").value}</td>
                        <td>${document.getElementById("dinner_saturday").value}</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>${document.getElementById("breakfast_sunday").value}</td>
                        <td>${document.getElementById("snack1_sunday").value}</td>
                        <td>${document.getElementById("lunch_sunday").value}</td>
                        <td>${document.getElementById("snack2_sunday").value}</td>
                        <td>${document.getElementById("dinner_sunday").value}</td>
                    </tr>
                </tbody>
            </table>
        </body>
        </html>
    `;

    // Open a new window and write the meal plan 
    var mealPlanWindow = window.open('about:blank', 'mealPlanPage', 'width=600,height=800');
    mealPlanWindow.document.write(mealPlanContent);
}

// Clear Weekly Planner
function clearForm() {
    document.getElementById("mealPlanForm").reset();
}

// Print/Download Planner
function printMealPlan() {
    window.print();
}

// Email validation
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}