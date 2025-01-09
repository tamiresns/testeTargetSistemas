const states = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    others: 19849.53
};

const totalMonthly = Object.values(states).reduce((acc, value) => acc + value, 0);

const percentages = {};
for (const key in states) {
    percentages[key] = (states[key] / totalMonthly) * 100;
}

console.log("Percentagem por estado:");
for (const key in percentages) {
    console.log(`${key.toUpperCase()}: ${percentages[key]}%`);
}