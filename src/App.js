import React from "react";

const Sports = ({ fav }) => {
  return <h1>I like {fav}</h1>;
};

function App() {
  return (
    <div>
      <h1>test</h1>
      <Sports fav="soccer" />
      <Sports fav="tennis" />
      <Sports fav="baseball" />
    </div>
  );
}

export default App;
