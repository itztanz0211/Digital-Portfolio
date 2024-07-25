// Data for Website Traffic Chart
const trafficData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Website Traffic',
        data: [300, 500, 400, 700, 600, 800],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Config for Website Traffic Chart
const trafficConfig = {
    type: 'line',
    data: trafficData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render Website Traffic Chart
const trafficChart = new Chart(
    document.getElementById('trafficChart'),
    trafficConfig
);

// Data for Social Media Engagement Chart
const engagementData = {
    labels: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
    datasets: [{
        label: 'Engagement',
        data: [300, 200, 400, 500],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

// Config for Social Media Engagement Chart
const engagementConfig = {
    type: 'bar',
    data: engagementData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Render Social Media Engagement Chart
const engagementChart = new Chart(
    document.getElementById('engagementChart'),
    engagementConfig
);

// Data for SEO Performance Chart
const seoData = {
    labels: ['Organic Search', 'Paid Search', 'Direct', 'Referral', 'Social'],
    datasets: [{
        label: 'SEO Performance',
        data: [500, 300, 200, 400, 100],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

// Config for SEO Performance Chart
const seoConfig = {
    type: 'pie',
    data: seoData,
    options: {
        responsive: true
    }
};

// Render SEO Performance Chart
const seoChart = new Chart(
    document.getElementById('seoChart'),
    seoConfig
);
