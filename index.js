const foods = [
  {
    name: "Pancakes",
    ingredients: ["1 cup flour", "1 egg", "1 cup milk", "1 tbsp sugar", "1 tsp baking powder"],
    recipe: "Mix all ingredients together. Pour onto a hot griddle and cook until bubbles form, then flip and cook for another minute.",
 
  },
  {
    name: "Spaghetti",
    ingredients: ["200g spaghetti", "2 cups tomato sauce", "1 onion", "2 cloves garlic", "1 tsp olive oil"],
    recipe: "Cook spaghetti according to package instructions. In a separate pan, sauté chopped onion and garlic in olive oil. Add tomato sauce and cooked spaghetti, and mix well."
    
  },
  {
    name: "Briyani",
    ingredients: ["1 cup basmati rice", "1 lb chicken", "2 onions", "2 tomatoes", "1/2 cup yogurt", "1 tbsp ginger-garlic paste", "1 tsp red chili powder", "1/2 tsp turmeric powder", "1/2 tsp garam masala", "1/4 cup chopped coriander leaves", "1/4 cup mint leaves", "2 tbsp ghee"],
        recipe: "Cook rice. Marinate chicken with yogurt, ginger-garlic paste, chili powder, turmeric powder, and salt. Cook onions until golden. Add tomatoes, marinated chicken, and cook. Layer rice and chicken, sprinkle garam masala, coriander leaves, mint leaves, and ghee. Cook covered until done."
      },
      {
        name: "Idly",
        ingredients: ["1 cup of idli rice","1 cup of urad dal (black gram dal)","Salt to taste"],
        recipe:"Wash the rice and urad dal separately and soak them in water for 4-6 hours Grind the soaked rice and dal separately to a smooth paste using a little water. The consistency should be like pancake batter.Mix the rice and dal batter together, add salt, and mix well. Allow the batter to ferment overnight or for 8-12 hours in a warm place.Grease the idli moulds with oil or ghee and pour the batter into the moulds.Steam the idlis in a steamer for about 10-15 minutes or until a toothpick inserted into the idli comes out clean.Remove the idlis from the moulds and serve hot with sambar and chutney."
      },
      {
        name: "veg roll",
        ingredients:["Tortilla wraps","Mixed vegetables (such as carrots, bell peppers, onions, and cabbage), finely chopped or julienned","Paneer (Indian cottage cheese)"],
        recipe:"To make veg rolls, start by heating some oil in a pan and sautéing mixed vegetables until they're slightly tender. Add grated or crumbled paneer to the vegetables, mix well, and season with salt, cumin powder, coriander powder, turmeric powder, and red chili powder. Cook until the vegetables are fully cooked and the mixture is dry. Warm tortilla wraps on a skillet or in the microwave, then place a portion of the vegetable mixture in the center of each wrap. Roll the tortilla tightly, folding in the sides to keep the filling intact. Serve the veg rolls hot with ketchup or chutney."

      },
      {
        
          name: "burger",
          ingredients: ["Burger buns", "Vegetable patty", "Lettuce", "Tomato slices", "Onion slices", "Cheese slices", "Mayonnaise", "Ketchup"],
          recipe: "To make a burger, start by slicing the burger buns in half. Toast them lightly if desired. Cook the vegetable patty according to the package instructions. Place a lettuce leaf on the bottom half of the bun, followed by the vegetable patty. Add tomato slices, onion slices, and a cheese slice. Spread mayonnaise and ketchup on the top half of the bun. Place the top half of the bun on top of the filling. Your burger is ready to serve!"
        
        
      }// Add more food items here
    ];
    
    recipe: "."
    

  // Add more food items here

const searchInput = document.getElementById("search");
const resultDiv = document.getElementById("result");
const submitButton = document.getElementById("submit");

function searchFood() {
  const searchTerm = searchInput.value.toLowerCase();
  const food = foods.find(item => item.name.toLowerCase() === searchTerm);
  window.onload = function() {
    document.getElementById('search').setAttribute('autocomplete', 'off');
    document.getElementById('search').value = '';
};

  
  if (food) {
    resultDiv.innerHTML = `
      <div class="recipe">
        <h2>${food.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          ${food.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
        <h3>Recipe:</h3>
        <p>${food.recipe}</p>
      </div>
    `;
    resultDiv.style.display = "block";
  } else {
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
  }
}

submitButton.addEventListener("click", searchFood);

// Trigger search when Enter key is pressed in the search input
searchInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchFood();
  }
});
