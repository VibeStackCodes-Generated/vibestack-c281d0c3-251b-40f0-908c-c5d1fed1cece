import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { posts as seedPosts, type BlogPost } from "@/data/posts";

interface PostStore {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  getPostById: (id: string) => BlogPost | undefined;
  getFeaturedPosts: () => BlogPost[];
  getPostsByCategory: (category: string) => BlogPost[];
  categories: string[];
}

const PostStoreContext = createContext<PostStore | null>(null);

const STORAGE_KEY = "wanderlust-posts";

function loadPosts(): BlogPost[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as BlogPost[];
      // Merge: keep seed posts that aren't overridden, plus any user posts
      const storedIds = new Set(parsed.map((p) => p.id));
      const missingSeeds = seedPosts.filter((p) => !storedIds.has(p.id));
      return [...parsed, ...missingSeeds];
    }
  } catch {
    // ignore
  }
  return [...seedPosts];
}

function savePosts(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function PostStoreProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<BlogPost[]>(loadPosts);

  useEffect(() => {
    savePosts(posts);
  }, [posts]);

  const addPost = (post: BlogPost) => {
    setPosts((prev) => [post, ...prev]);
  };

  const deletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const getPostById = (id: string) => posts.find((p) => p.id === id);

  const getFeaturedPosts = () => posts.filter((p) => p.featured);

  const getPostsByCategory = (category: string) => {
    if (category === "All") return posts;
    return posts.filter((p) => p.category === category);
  };

  // Dynamically build categories from all posts
  const categorySet = new Set(posts.map((p) => p.category));
  const categories = ["All", ...Array.from(categorySet).sort()];

  return (
    <PostStoreContext.Provider
      value={{ posts, addPost, deletePost, getPostById, getFeaturedPosts, getPostsByCategory, categories }}
    >
      {children}
    </PostStoreContext.Provider>
  );
}

export function usePostStore() {
  const ctx = useContext(PostStoreContext);
  if (!ctx) throw new Error("usePostStore must be used within PostStoreProvider");
  return ctx;
}
