import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    if (query !== "") {
      axios({
        method: "GET",
        url: "/api/channels/search",
        params: { searchTerm: query, pageNo: pageNumber },
        cancelToken: new axios.CancelToken(c => (cancel = c))
      })
        .then(res => {
          setBooks(prevBooks => {
            return [...new Set([...prevBooks, ...res.data])];
          });
          setHasMore(res.data.docs.length > 0);
          setLoading(false);
          setError(true);
          console.log(res.data);
          return null;
        })
        .catch(e => {
          if (axios.isCancel(e)) return;
        });
      return () => cancel();
    }
  }, [query, pageNumber]);
  return { loading, error, books, hasMore };
}
