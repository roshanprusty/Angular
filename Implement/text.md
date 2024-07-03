```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-city-cards',
  templateUrl: './city-cards.component.html',
  styleUrls: ['./city-cards.component.css']
})
export class CityCardsComponent {
  cities = [
    { name: 'Paris', country: 'France', image: 'paris.jpg' },
    { name: 'New York', country: 'USA', image: 'new-york.jpg' },
    { name: 'Tokyo', country: 'Japan', image: 'tokyo.jpg' },
    { name: 'London', country: 'UK', image: 'london.jpg' },
    { name: 'Rome', country: 'Italy', image: 'rome.jpg' },
  ];
}
```

```html
<div class="city-cards">
  <div *ngFor="let city of cities" class="card">
    <img src="{{ city.image }}" alt="{{ city.name }}">
    <h3>{{ city.name }}</h3>
    <p>{{ city.country }}</p>
  </div>
</div>
```

```css
.city-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 200px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
```

**Explanation:**

1. **TypeScript Component:**
   - We define a `cities` array in the `CityCardsComponent` with objects containing city name, country, and image path.
   - You'll need to replace the placeholder image paths (`paris.jpg`, `new-york.jpg`, etc.) with actual image file paths.

2. **HTML Template:**
   - We use `*ngFor` to iterate over the `cities` array and create a card for each city.
   - Inside the card, we display the city name, country, and an image using interpolation (`{{ }}`).

3. **CSS Styling:**
   - The CSS styles the cards to create a grid layout with borders, rounded corners, and image styling.

**To use this code:**

1. **Create the component:**
   - Generate a new Angular component using the Angular CLI: `ng generate component city-cards`
   - Replace the content of the generated component files with the code above.

2. **Add the component to your module:**
   - Import the `CityCardsComponent` into your module's `declarations` array.

3. **Include the component in your template:**
   - Add `<app-city-cards></app-city-cards>` to the template where you want to display the cards.

4. **Provide image files:**
   - Make sure you have the image files for each city in your project's assets folder.

Now, when you run your Angular application, you should see a grid of cards displaying the famous cities with their names and countries.