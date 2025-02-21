import api from "@/services/api";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchResult {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    api
      .get<FetchResult>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;
