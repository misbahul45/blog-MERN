import "./App.css"
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom"


function App() {
  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/blogs', {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCount(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(count);
  return (
    <Routes>
      <Route index element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<p>Home</p>} />
    </Routes>
  );
}
export  default App