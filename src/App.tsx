import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div className='flex flex-col min-h-lvh'>
    <span>Welcome</span>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
