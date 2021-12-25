import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TestReactRouter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.value;
    name ? setSearchParams({ name }) : setSearchParams({});
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        onMouseLeave={() => navigate(`watch?v=${searchTerm}`)}
      />
    </div>
  );
}
