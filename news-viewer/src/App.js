import React from "react";
import NewsPage from "./pages/NewsPage";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />;
    </Routes>
  );
};

export default App;

// import React from "react";
// import axios from "axios";
// import { useState } from "react";

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = () => {
//     const KEY = process.env.REACT_APP_NEWS_API_KEY;
//     axios
//       .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
// <h1>News Viewer</h1>;
