document.addEventListener("DOMContentLoaded", function() {
    const ingredients = [
        "1-2 black tea bags or 2 tablespoons of loose leaf tea",
        "1 cup of hot water",
        "1-2 tablespoons of sugar (adjust to taste)",
        "2 tablespoons of condensed milk or creamer",
        "Ice cubes (optional, for iced milk tea)",
        "Cooked tapioca pearls (optional, for bubble tea)",
        "Additional flavorings like vanilla, honey, or syrups (optional)"
    ];

    const preparationSteps = [
        "Boil the water and pour it over the tea bag or loose leaf tea. Allow it to steep for 3-5 minutes. Remove the tea bag or strain the loose leaf tea.",
        "Add sugar to the hot tea and stir until completely dissolved. Add condensed milk or creamer and stir until well mixed. Add additional flavorings like vanilla or syrups at this stage.",
        "Cook tapioca pearls according to the package instructions, usually boiling for 20 minutes and then letting them cool. Soak them in honey or brown sugar syrup for added sweetness.",
        "If making iced milk tea, fill a glass with ice cubes. Pour the tea mixture over the ice. If making bubble tea, add the cooked tapioca pearls into the glass before pouring the tea. Stir well and serve with a straw."
    ];

    const ingredientsListElement = document.getElementById("ingredients-list");
    ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientsListElement.appendChild(listItem);
    });

    const preparationStepsElement = document.getElementById("preparation-steps");
    preparationSteps.forEach(step => {
        const stepItem = document.createElement("li");
        stepItem.textContent = step;
        preparationStepsElement.appendChild(stepItem);
    });
});
