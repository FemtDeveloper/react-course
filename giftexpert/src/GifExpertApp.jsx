import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <button>Add Category</button>
      <ol>
        {categories.map((element) => (
          <GiftGrid category={element} key={element} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
