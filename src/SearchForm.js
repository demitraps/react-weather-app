import React from "react";
import axios from "axios";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form>
        <input type="search" placeholder="Search city..." />
        <input type="submit" value="Go" />
      </form>
    </div>
  );
}
