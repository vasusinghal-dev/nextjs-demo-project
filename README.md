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
api/
├── db.json
├── db.example.json
├── package.json
├── package-lock.json

app/
├── api/
│   ├── comments.ts     # getComments
│   ├── posts.ts        # getPosts, getPost(postId), getUserPosts(userId)
│   ├── todos.ts        # getTodos, getUserTodos(userId)
│   └── users.ts        # getUsers, getUser(userId)
│
├── components/
│   ├── PostCard.tsx    # Post preview card
│   ├── Skeleton.tsx    # Loading shimmer UI
│   └── TodoItem.tsx    # Todo list item
│
├── posts/
│   ├── [postId]/
│   │   └── page.tsx    # Single post page (dynamic route)
│   └── page.tsx        # Posts list
│
├── todos/
│   └── page.jsx        # Todos list
│
├── users/
│   ├── [userId]/
│   │   └── page.tsx    # Single user page (dynamic route)
│   ├── page.jsx        # Users list
│   └── loading.tsx     # Route-level loading state
│
├── page.tsx            # Home page
│                         (Title: "This is next blog app")
│
├── layout.tsx          # Root layout
│                         (Navbar: MyApp | Posts | Users | Todos)
│
└── styles.css          # Global styles
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
