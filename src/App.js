import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
      const data = await response.json();
      setUser(data.results[0]);
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div className="flex items-center justify-center h-screen text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white border border-black rounded-lg shadow-md p-6 max-w-lg flex">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-32 h-32 border border-black"
          />
        </div>
        {/* Information Section */}
        <div className="ml-6">
          <div className="text-lg font-bold">{`${user.name.first} ${user.name.last}`}</div>
          <div className="text-gray-600 mt-2">{`Gender: ${user.gender}`}</div>
          <div className="text-gray-600 mt-2">{`Phone: ${user.phone}`}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
