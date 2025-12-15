# 📝 Next.js Demo Blog Project

This is a **demo Next.js App Router project** built to understand and practice core Next.js concepts through hands-on implementation.

## 🎯 Purpose

The goal of this project is **learning**, not production readiness.
It focuses on understanding how modern Next.js works under the hood.

---

## 🧠 Concepts Covered

- ✅ App Router (`app/` directory)
- ✅ Dynamic Routing (`[id]`, `[...slug]`)
- ✅ Data Fetching in Server Components
- ✅ `Suspense` for component-level loading
- ✅ `loading.tsx` for route-level loading
- ✅ `error.tsx` for runtime error handling
- ✅ `not-found.tsx` and `notFound()` usage

---

## 🗂️ Project Structure (Simplified)

```
app/
├── api/
│   ├── comments.ts        # getComments
│   ├── posts.ts           # getPosts, getPost(postId), getUserPosts(userId)
│   ├── todos.ts           # getTodos, getUserTodos(userId)
│   └── users.ts           # getUsers, getUser(userId)
│
├── components/
│   ├── PostCard.tsx       # Post preview card component
│   ├── TodoItem.tsx       # Single todo item UI
│   └── Skeleton.tsx       # Shimmer / skeleton loading UI
│
├── posts/
│   ├── page.tsx           # Posts list page
│   └── [postId]/
│       └── page.tsx       # Single post page (dynamic route)
│
├── todos/
│   └── page.jsx           # Todos list page
│
├── users/
│   ├── page.jsx           # Users list page
│   ├── [userId]/
│   │   └── page.tsx       # Single user page (dynamic route)
│   └── loading.tsx        # Route-level loading state for users
│
├── page.tsx               # Home page (title: "This is next blog app")
├── layout.tsx             # Root layout with navbar + children
├── styles.css             # Global styling
```

---

## 🔄 Key Learnings

- **Suspense** enables partial UI rendering while data loads
- **`loading.tsx`** is automatic and route-scoped
- **Dynamic routes** are folder-based and server-first
- **Error boundaries** must be client components
- **404 handling** is explicit and controllable with `notFound()`

---

## 🚀 Tech Stack

- Next.js (App Router)
- React Server Components
- TypeScript
- Fetch API

---

## ⚠️ Notes

- This project is intentionally kept simple
- Artificial delays are used to visualize loading states
- Styling is minimal to focus on behavior, not UI
