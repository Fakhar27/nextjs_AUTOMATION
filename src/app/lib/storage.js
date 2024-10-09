// lib/storage.js
let mealPlan = null;

export function storeMealPlan(plan) {
    mealPlan = plan;
}

export function getMealPlan() {
    return mealPlan;
}