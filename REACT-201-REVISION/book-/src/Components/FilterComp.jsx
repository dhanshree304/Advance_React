import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.getAll("category");
  const [category, setCategory] = useState(initialFilter || []);
  const initialSort = searchParams.getAll("sortBy");
  const [sortBy, setSortBy] = useState(initialSort[0] || "asc");
                                                        
  const handleFilter = (e) => {
    const newCategories = [...category];

    console.log(newCategories,e.target.value,newCategories.indexOf(e.target.value))
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
  
    setCategory(newCategories);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      console.log(params);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div style={{ width: "20%", border: "1px solid red", height: "800px" }}>
      <h3>Filter Component</h3>
      <div>
        <input
          type="checkbox"
          value="Creative"
          onChange={handleFilter}
          checked={category.includes("Creative")}
        />
        <label>Creative</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Technical"
          onChange={handleFilter}
          checked={category.includes("Technical")}
        />
        <label>Technical</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Business"
          onChange={handleFilter}
          checked={category.includes("Business")}
        />
        <label>Business</label>
      </div>

      <h3>Sort Component</h3>
      <div onChange={handleSort}>
        <div>
          <input
            type="radio"
            value="asc"
            defaultChecked={sortBy === "asc"}
            name="sortBy"
          />
          <label>ASC</label>
        </div>
        <div>
          <input
            type="radio"
            value="desc"
            defaultChecked={sortBy === "desc"}
            name="sortBy"
          />
          <label>DESC</label>
        </div>
      </div>
    </div>
  );
};

export { FilterComp };
