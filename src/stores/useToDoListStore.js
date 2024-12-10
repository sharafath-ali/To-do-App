import { create } from "zustand";

const useToDoListStore = create((set) => ({
  toDoList: [],
  addTask: (task) => set((state) => ({ toDoList: [...state.toDoList, task] })),
  removeTask: (id) =>
    set((state) => ({
      toDoList: state.toDoList.filter((task) => task.id !== id),
    })),
  updateTask: (id, newTask) =>
    set((state) => ({
      toDoList: state.toDoList.map((task) =>
        task.id === id ? { ...task, ...newTask } : task
      ),
    })),
  completeTask: (id) =>
    set((state) => ({
      toDoList: state.toDoList.map((task) =>
        task.id === id ? { ...task, strike: 1 } : task
      ),
    })),
  uncompleteTask: (id) =>
    set((state) => ({
      toDoList: state.toDoList.map((task) =>
        task.id === id ? { ...task, strike: 0 } : task
      ),
    })),
}));

export default useToDoListStore;