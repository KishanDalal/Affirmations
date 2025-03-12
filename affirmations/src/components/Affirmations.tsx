// Affirmation.js
import { useState, useEffect } from "react";

const Affirmation = () => {
  const [affirmation, setAffirmation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAffirmation = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://www.affirmations.dev/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAffirmation(data.affirmation);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchAffirmation();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <p>Hello: {affirmation}</p>
    </div>
  );
};

export default Affirmation;
