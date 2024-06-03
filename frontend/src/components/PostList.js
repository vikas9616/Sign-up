import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useAuth } from '../context/AuthContext';
import InfiniteScroll from 'react-infinite-scroll-component'
const PostList = () => {
    const [dataSource, SetDataSource] = useState(Array.from({length:20}));
    const [hasMore, setHasMore]= useState(true);
    const fetchMoreData =()=>{
        setTimeout(()=>{
            SetDataSource(dataSource.concat(Array.from({length:20})))

        },500);
    }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold  w-80 mx-auto p-2 mt-3">MelodyVerse Posts</h1>
      <InfiniteScroll dataLength={dataSource.length} next={fetchMoreData} hasMore={hasMore}>
        {dataSource.map((item,index)=>{
            return <div className='border w-80 mx-auto p-2 mt-3 bg-slate-200'> 
            <h1 className='text-xl'>Title</h1>
            <p>lorem ipsom</p>post:{index+1} </div>

        })}
      </InfiniteScroll>
     
    </div>
  );
};

export default PostList;

//  api method


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get(`/api/posts?page=${page}&limit=10`);
//       setPosts(prevPosts => [...prevPosts, ...res.data]);
//       if (res.data.length === 0) {
//         setHasMore(false);
//       }
//     } catch (err) {
//       console.error('Error fetching posts:', err);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [page]);

//   const fetchMoreData = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">MelodyVerse Posts</h1>
//       <InfiniteScroll
//         dataLength={posts.length}
//         next={fetchMoreData}
//         hasMore={hasMore}
//         loader={<h4 className="text-center">Loading more posts...</h4>}
//         endMessage={<p className="text-center">No more posts to show.</p>}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {posts.map((post, index) => (
//             <div key={index} className="p-4 bg-white rounded shadow-md">
//               <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//               <p className="text-gray-700">{post.content}</p>
//             </div>
//           ))}
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default PostList;
