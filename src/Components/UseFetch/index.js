import { useState, useEffect } from 'react';

export default function UseFetch(url) {
  const [data, setData] = useState("");

  function fetchRandomImage() {
    if (undefined === url) {
      return;
    }
    fetch(url)
      .then(res => res.url)
      .then(url => setData(url));
  };

  useEffect(() => {
    fetchRandomImage();
  });

  return [data, fetchRandomImage]
}
