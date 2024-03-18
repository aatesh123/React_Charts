import React, { useState, useEffect, useCallback } from 'react';

const FetchApi = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2); // Change to 2 posts per page
  const [totalPosts, setTotalPosts] = useState(0);

  const fetchTotalPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch total posts');
      }
      const data = await response.json();
      setTotalPosts(data.length);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const postData = await response.json();
      setPosts(postData);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [currentPage, postsPerPage]);

  useEffect(() => {
    fetchTotalPosts();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const lastPage = () => {
    setCurrentPage(Math.ceil(totalPosts / postsPerPage));
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
          <button onClick={firstPage} disabled={currentPage === 1}>First</button>
          <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}>Next</button>
          <button onClick={lastPage} disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}>Last</button>
          <p>Page {currentPage}</p>
        </div>
      )}
    </div>
  );
};

export default FetchApi;
