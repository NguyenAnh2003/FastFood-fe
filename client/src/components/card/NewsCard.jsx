import React from 'react'

export default function NewsCard(props) {
  const {post} = props;

  return (
    <div className="h-[404px] flex items-center">
      <div className="p-6 bg-white rounded-xl shadow-xl  transition-all transform duration-500">
        <img className="w-64 h-60 object-cover rounded-t-md" src={post.image} alt={post.name} />
        <div className="mt-4">
          <h1 className="w-64 text-2xl font-bold text-gray-700">{post.name}</h1>
          <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button className="text-lg block font-semibold py-2 px-6 text-green-100 bg-green-400 rounded-lg shadow">See More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
