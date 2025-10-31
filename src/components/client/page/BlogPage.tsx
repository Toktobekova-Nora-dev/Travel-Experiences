"use client";
import React, { useState } from "react";

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<{
    title: string;
    category: string;
    image: string;
    content: string;
  } | null>(null);

  const posts = [
    {
      title: "Complete Guide to Song-Kol Lake",
      category: "Destinations",
      image:
        "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80",
      content:
        "Song-Kol Lake is one of Kyrgyzstan’s most breathtaking alpine lakes. Surrounded by rolling pastures and snow-capped peaks, it’s a favorite among nomads and travelers alike. The best time to visit is from June to September when yurts are open and roads are accessible. Activities include horseback riding, hiking, and experiencing nomadic culture firsthand.",
    },
    {
      title: "Best Time to Visit Kyrgyzstan",
      category: "Travel Tips",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      content:
        "Kyrgyzstan offers distinct experiences throughout the year. Summer (June to September) is ideal for trekking and exploring the mountains, while winter (December to February) is perfect for skiing in Karakol. Spring and autumn offer mild weather and fewer tourists, making them great for cultural trips.",
    },
    {
      title: "Kyrgyz Food Guide",
      category: "Culture",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      content:
        "Kyrgyz cuisine reflects the country’s nomadic heritage. Popular dishes include beshbarmak (noodles with meat), lagman (hand-pulled noodles), and samsa (meat pastries). Don’t miss trying kumis, a traditional fermented mare’s milk drink that’s a staple of Kyrgyz hospitality.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 bg-gradient-to-r from-emerald-800 to-emerald-600">
        <div className="flex items-center justify-center h-full px-4 mx-auto text-center text-white max-w-7xl">
          <div>
            <h1 className="mb-4 text-5xl font-bold">Travel Blog</h1>
            <p className="text-xl">Stories and guides from Kyrgyzstan</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto max-w-7xl">
        {!selectedPost ? (
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="overflow-hidden transition-shadow bg-white shadow-lg rounded-2xl hover:shadow-xl"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-56"
                />
                <div className="p-6">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                    {post.category}
                  </span>
                  <h3 className="mt-3 mb-2 text-xl font-bold">{post.title}</h3>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-sm font-semibold text-emerald-600 hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl p-8 mx-auto bg-white shadow-lg rounded-2xl">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="object-cover w-full h-64 mb-6 rounded-xl"
            />
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
              {selectedPost.category}
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-gray-800">
              {selectedPost.title}
            </h2>
            <p className="mb-8 leading-relaxed text-gray-700">
              {selectedPost.content}
            </p>
            <button
              onClick={() => setSelectedPost(null)}
              className="px-4 py-2 font-semibold text-white transition rounded-lg bg-emerald-600 hover:bg-emerald-700"
            >
              ← Back to Blog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
