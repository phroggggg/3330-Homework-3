$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    var usernameSpan, revenueSpans, customerNumSpan, ordersAmtSpan, issuesAmtSpan, notifNumSpan;
    var salesTableBody, activityList, customerTableBody, systemStatusList, notificationsList, tasksList;

    usernameSpan = $('#username');
    revenueSpans = $('.revenue-amt');
    customerNumSpan = $('#customer-num');
    ordersAmtSpan = $('#orders-amt');
    issuesAmtSpan = $('#issues-amt');
    notifNumSpan = $('#notification-num');

    salesTableBody = $('#salesTableBody');
    activityList = $('#activity-list');
    customerTableBody = $('#customerTableBody');
    systemStatusList = $('#system-status-list');
    notificationsList = $('#notifications-list');
    tasksList = $('#tasks-list');

    function loadStats() {
        usernameSpan.text(username);
        revenueSpans.text(revenueAmt);
        customerNumSpan.text(customerNum);
        ordersAmtSpan.text(ordersAmt);
        issuesAmtSpan.text(issuesAmt);
        notifNumSpan.text(notifAmt);
    }
    loadStats();

    function loadSales() {
        sales.forEach(sale => {
            const row = $("<tr>");
            row.html(`<td>${sale.product}</td><td>${sale.quantity}</td><td>${sale.revenue}</td>`);
            salesTableBody.append(row);
        });
    }
    loadSales();

    function loadActivities() {
        activities.forEach(activity => {
            const listItem = $("<li>");
            listItem.html(`${activity.message}`);
            activityList.append(listItem);
        });
    }
    loadActivities();

    function loadCustomers() {
        customers.forEach(customer => {
            const statusClass = customer.status === "Active" ? "status-active" : "status-pending";
            const row = $("<tr>");
            row.html(`<td>${customer.name}</td><td>${customer.email}</td>
                <td><span class="status ${statusClass}">${customer.status}</span></td>
                <td>${customer.joined}</td>`);
            customerTableBody.append(row);
        });
    }
    loadCustomers();

    function loadSystemStatus() {
        messages.forEach(message => {
            const listItem = $("<li>");
            listItem.html(`${message.messsage}`);
            systemStatusList.append(listItem);
        });
    }
    loadSystemStatus();

    function loadNotifications() {
        notifications.forEach(notification => {
            const listItem = $("<li>");
            listItem.html(`${notification.messsage}`);
            notificationsList.append(listItem);
        });
    }
    loadNotifications();

    function loadTasks() {
        tasks.forEach(task => {
            const listItem = $("<li>");
            listItem.html(`${task.messsage}`);
            tasksList.append(listItem);
        });
    }
    loadTasks();

    var dashboardTabs, accordion, customerDialog, newCustomerButton, customerDate;

    dashboardTabs = $('#dashboardTabs');
    accordion = $('#accordion');
    customerDialog = $('#customerDialog');
    newCustomerButton = $('#newCustomerButton');
    customerDate = $('#customerDate');

    $("button").button();

    dashboardTabs.tabs();

    accordion.accordion({
        collapsible: true,
        heightStyle: "content"
    });

    customerDialog.dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
                var name = $("#customerName").val();
                var email = $("#customerEmail").val();
                if (!name || !email) {
                    alert(
                        "Please enter a name and email."
                    );
                    return;
                }
                alert("Customer created: " + name);
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    newCustomerButton.on("click", function () {
        customerDialog.dialog("open");
    });

    customerDate.datepicker();


});